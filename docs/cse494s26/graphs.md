---
title: "Graphs"
---

## 1. Topological Sort

Topological sort orders the vertices of a directed acyclic graph (DAG) such that for every edge $(u \to v)$, $u$ appears before $v$ in the ordering.

When to use:
- Problems involving dependencies or prerequisites
- Scheduling tasks with ordering constraints
- Any problem that can be modeled as a DAG

Key properties:
- Only possible for DAGs (no cycles)
- Multiple valid orderings may exist
- Can be computed using DFS or Kahn's algorithm (BFS-based)

Common applications:
- Course prerequisites
- Build dependencies
- Task scheduling with constraints

Practice:
- [Milking Order](https://usaco.org/index.php?page=viewproblem2&cpid=838)