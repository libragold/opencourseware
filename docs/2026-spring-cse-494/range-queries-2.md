---
title: "Range Queries 2"
---

## 1. Walking on Segment Trees

Let's take a look at [CSES Hotel Queries](https://cses.fi/problemset/task/1143):

The problem boils down to handling point updates and queries of the form, "Find the first value in the array less than or equal to some target".

What's a solution that works in $O(\log^2 n)$ per query without using any new techniques?
- Use a maximum segment tree
- We can binary search for the first prefix maximum that exceeds the target.
- We ask $O(\log n)$ questions in the binary search and each one takes $O(\log n)$ to answer with the segment tree

However, $O(\log^2 n)$ per query can be too slow in many cases. If instead we "walk" down the segment tree, we can answer each query in $O(\log n)$.
- Use the same maximum segment tree
- At every node ask the question, is the first prefix maximum in my left subtree?
- If yes, recurse in the left child; If no, recurse into the right one.
- The time complexity is now bounded by the height of the tree which is $O(\log n)$.

In general, the walking trick can turn:
- binary search + segment tree solutions from $O(\log^2 n)$,
- into a single $O(\log n)$ descent.

Some common walking patterns:
- **k-th one / k-th alive**: store counts.
- **leftmost position with value $\geq x$**: store maximums.
- **first prefix whose sum reaches $x$**: store sums.

Problems:
- [List Removals (CSES)](https://cses.fi/problemset/task/1749)

## 2. Lazy Segment Trees

A standard segment tree is great for

- point update + range query,
- or range query + point update.

Lazy propogation lets us handle certain types of range update + range query operations.

The idea is:

- if an update fully covers a node’s interval,
- update that node’s stored summary immediately,
- and store a **lazy tag** saying “this change still needs to be pushed to my children later”.

Even if a node has not pushed its update to the children yet, the node’s own stored value should already reflect that update on the whole segment. To be certain that a nodes value reflects the correct value on the whole segment, we must push the lazy tags of all of the nodes parents.


The main three parts to consider when writing the lazy segtree are :
1) What is the main segment tree storing and what is its combine function?
This is the same combine function as if the segment tree was not lazy
2) What type of lazy update do you need to make and how would the lazy update affect the value stored in a segment tree node?
3) If a segment tree node already has a lazy tag on it, when we are attempting to update it, we need to combine these lazy updates somehow. How would a lazy update on a node affect an already existing but not yet pushed lazy update?


Here is another modular implementation of a lazy segment tree similar to the original segment tree with the code also taken from https://github.com/bqi343.
The three functions to be filled out are the answers to the questions above in order.
<details>
    <summary>Lazy Segment Tree Code</summary>

```cpp    
template <class T, class Q> struct SegTree { // cmb(ID,b) = b
    const T ID{idnode}; const Q IDQ{lazynode};
    T cmb(T a, T b) { }
    T cmbTQ(T a, Q b){ }
    Q lazycmb(Q a, Q b){ }
    int n; vector<T> seg; vector<Q> lazy;
    void init(int _n) { // upd, query also work if n = _n
        for (n = 1; n < _n; ) n *= 2; 
        seg.assign(2*n,ID); 
        lazy.assign(2*n,IDQ); 
    }

    void push(int node, int l, int r){
        seg[node] = cmbTQ(seg[node],lazy[node]);
        if(l != r){
            lazy[2*node] = lazycmb(lazy[node],lazy[2*node]);
            lazy[2*node+1] = lazycmb(lazy[node],lazy[2*node+1]);
        }
        lazy[node] = IDQ;
    }
    void pull(int p) { 
        seg[p] = cmb(seg[2*p],seg[2*p+1]); 
    }

    void upd(int l, int r, Q val){
        upd(l,r,val,0,n-1,1);
    }

    void upd(int l, int r, Q val, int start, int end, int node) { 
        push(node,start,end);
        if(r < start  || l > end) return;

        if(l <= start && end <= r){
            lazy[node] = val; 
            push(node,start,end);
            return; 
        }
        int mid = (start + end)/2;
        upd(l,r,val,start,mid,2*node);
        upd(l,r,val,mid+1,end,2*node+1);
        pull(node);
    }

    T query(int l, int r){
        return query(l,r,0,n-1,1);
    }
    T query(int l, int r, int start, int end, int node) {	// zero-indexed, inclusive
        push(node,start,end);
        if(r < start || l > end){
            return ID;
        }
        if(l <= start && end <= r){
            return seg[node];
        } else {
            int mid = (start + end)/2;
            T x = query(l,r, start, mid,2*node);
            T y = query(l,r, mid+1, end,2*node+1);
            return cmb(x,y);
        }
    }
};
```
</details>
---

### Common lazy segment trees

#### 1. Range add update + range sum query
Node stores the sum.
Lazy tag stores “add \(x\) to the whole segment”.
If a segment has length `len`, then adding `x` changes its sum by `x * len`.

- [Horrible (SPOJ)](https://www.spoj.com/problems/HORRIBLE/)

#### 2. Range add update + range min/max query

Node stores min or max.
Lazy tag stores pending addition.

#### 3. Range assign update + range sum/min/max query

Node stores sum or min/max.
Lazy tag stores “set everything in this segment to $x$”.

This is the first place where overwrite semantics matter: a later assignment destroys earlier pending assignments or additions in a particular way.

Problems:
- [LITE (SPOJ)](https://www.spoj.com/problems/LITE/)
- [Range Updates and Sums (CSES)](https://cses.fi/problemset/task/1735)
- [MountainCraft (NAC 2024)](https://open.kattis.com/problems/mountaincraft)
- [Lucky Queries (CF)](https://codeforces.com/problemset/problem/145/E)

### Walking on a lazy segment tree

These ideas combine very naturally.
If you want to walk on a tree that also supports range updates, just make sure you always push the lazy tags before descending, just like you do when querying/updating.
