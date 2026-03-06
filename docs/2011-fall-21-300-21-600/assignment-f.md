---
title: "Assignment F"
---

Independence results like this are often established by semantics.

Common Mistakes:

  * Few students forgot to show that MP preserves &#8216;truths&#8217;, thus they didn&#8217;t state that all theorems are &#8216;true&#8217;.
  * Checking all possible valuations of the axiom schemata is crucial in the proof of independence.

Challenge: Prove that [Peirce&#8217;s Law][1] $A\supset B\supset A\supset A$ cannot be deduced by using only axiom schemata $A\supset .B\supset A$ and $[A\supset .B\supset C]\supset .A\supset B\supset .A\supset C$.

Hint: design a three-valued truth assignment and show that any consequence deduced from the axioms will always take value T and Peirce&#8217;s Law won&#8217;t. You may consider the following table and try to figure out what values x, y and z should take respectively.

<table>
  <tr>
    <th>
      $A$
    </th>
    
    <th>
      $B$
    </th>
    
    <th>
      $A\supset B$
    </th>
  </tr>
  
  <tr>
    <td>
      T
    </td>
    
    <td>
      T
    </td>
    
    <td>
      T
    </td>
  </tr>
  
  <tr>
    <td>
      T
    </td>
    
    <td>
      M
    </td>
    
    <td>
      M
    </td>
  </tr>
  
  <tr>
    <td>
      T
    </td>
    
    <td>
      F
    </td>
    
    <td>
      F
    </td>
  </tr>
  
  <tr>
    <td>
      M
    </td>
    
    <td>
      T
    </td>
    
    <td>
      x
    </td>
  </tr>
  
  <tr>
    <td>
      M
    </td>
    
    <td>
      M
    </td>
    
    <td>
      y
    </td>
  </tr>
  
  <tr>
    <td>
      M
    </td>
    
    <td>
      F
    </td>
    
    <td>
      z
    </td>
  </tr>
  
  <tr>
    <td>
      F
    </td>
    
    <td>
      T
    </td>
    
    <td>
      T
    </td>
  </tr>
  
  <tr>
    <td>
      F
    </td>
    
    <td>
      M
    </td>
    
    <td>
      T
    </td>
  </tr>
  
  <tr>
    <td>
      F
    </td>
    
    <td>
      F
    </td>
    
    <td>
      T
    </td>
  </tr>
</table>

 [1]: http://en.wikipedia.org/wiki/Peirce's_law
