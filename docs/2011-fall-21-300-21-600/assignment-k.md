---
title: "Assignment K"
---

This exercise is designed to test students&#8217; understanding of several basic notions in first order logic, such as terms, wffs, proper substitution, etc.. Induction on the formation of terms and wffs of $\mathcal{F}$ is a general method in proving properties for terms and wffs.

Common Mistakes:

* By using induction on the formation of terms and wffs, students really need to go through all of the following steps to conclude all terms and wffs have the property,
Each individual variable or constant has the property.

$f^n t_1\dots t_n$ has the property.

$P^n t_1\dots t_n$ has the property.

Each propositional variable standing alone has the property.

If $A$ has the property, so is $\sim A$.

If $A$ and $B$ has the property, so is $A\vee B$.

If $A$ has the property and $x$ is an individual variable, then $\forall x A$ has the property.

* In this exercise, &#8220;the property&#8221; that we want to proof is as follows, $C$ has the property provided that if $y$ is not free in $C$ and $y$ and $y$ is free for $x$ in C, then $\dot{S}^y_x \dot{S}^x_y C=C$. In several proofs, students wrote, &#8216;if $\dot{S}^y_x \dot{S}^x_y t_i=t_i$ for $i=1,\dots,n$, then $f^n t_1\dots t_n$ has the property&#8217;. But what we really need to prove is, if every $t_i$ has the property for $i=1,\dots,n$, so does $f^n t_1\dots t_n$. Notice, these two statements are different, and the former is insufficient for our proof.
