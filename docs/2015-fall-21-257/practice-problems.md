---
title: "Practice problems"
---

**Problem 1.** Clasher needs to train Archers, Giants and Wizards from 2 Barracks within 45 minutes. The table below gives the training cost (in units of Elixir), the training time, damage per second, hit points and housing space of each troop.

<table>
  <tr>
    <th>
      Troop
    </th>
    
    <th>
      Training cost
    </th>
    
    <th>
      Training time
    </th>
    
    <th>
      Damage per second
    </th>
    
    <th>
      Hit points
    </th>
    
    <th>
      Housing space
    </th>
  </tr>
  
  <tr>
    <td>
      Archer
    </td>
    
    <td>
      400
    </td>
    
    <td>
      24 seconds
    </td>
    
    <td>
      22
    </td>
    
    <td>
      44
    </td>
    
    <td>
      1
    </td>
  </tr>
  
  <tr>
    <td>
      Giant
    </td>
    
    <td>
      940
    </td>
    
    <td>
      2 minutes
    </td>
    
    <td>
      43
    </td>
    
    <td>
      940
    </td>
    
    <td>
      5
    </td>
  </tr>
  
  <tr>
    <td>
      Wizard
    </td>
    
    <td>
      3500
    </td>
    
    <td>
      8 minutes
    </td>
    
    <td>
      170
    </td>
    
    <td>
      156
    </td>
    
    <td>
      4
    </td>
  </tr>
</table>

In order to destroy the enemy, the total hit points of the troops have to be at least 18800 respectively. The total housing space cannot exceed 220. One of the Barrack is boosted and trains troops 4 times faster. For example, it takes only 2 minutes to train a wizard. Clasher will obtain 100 units of Elixir for each damage per second that the troops have.

(a) Formulate the linear program to maximize the difference between the return and the total training cost. Your linear program should also yield the number of troops trained in each Barrack.

(b) Set up the initial tableau for the linear program in (a) and perform one iteration on the tableau which uses the two phase method.

(c) Determine the dual of the linear program.

**Problem 2.** A group of skiers from Pittsburgh wants to tour around three ski resorts in USA: Snowbird in Utah, Jackson Hole in Wyoming, Aspen in Colorado. Below is the table of the costs for flights between the cities. Theses flights are all nonstop or one-stop.

<table>
  <tr>
    <th>
      From\To
    </th>
    
    <th>
      Pittsburgh,PA
    </th>
    
    <th>
      Salt Lake City, UT
    </th>
    
    <th>
      Jackson,WY
    </th>
    
    <th>
      Aspen,CO
    </th>
  </tr>
  
  <tr>
    <th>
      Pittsburgh,PA
    </th>
    
    <td>
      &#8211;
    </td>
    
    <td>
      $183
    </td>
    
    <td>
      $443
    </td>
    
    <td>
      $328
    </td>
  </tr>
  
  <tr>
    <th>
      Salt Lake City, UT
    </th>
    
    <td>
      $183
    </td>
    
    <td>
      &#8211;
    </td>
    
    <td>
      $279
    </td>
    
    <td>
      $323
    </td>
  </tr>
  
  <tr>
    <th>
      Jackson,WY
    </th>
    
    <td>
      $333
    </td>
    
    <td>
      $279
    </td>
    
    <td>
      &#8211;
    </td>
    
    <td>
      $409
    </td>
  </tr>
  
  <tr>
    <th>
      Aspen,CO
    </th>
    
    <td>
      $423
    </td>
    
    <td>
      $356
    </td>
    
    <td>
      $403
    </td>
    
    <td>
      &#8211;
    </td>
  </tr>
</table>

Alternatively, there is a two-stop flight from Pittsburgh to Jackson that costs $335 and there is one from Salt Lake City to Aspen that costs $317. The skiers are willing to take at most 1 two-stop flight. Formulate the linear program to find the tour trip plan that minimizes the cost.
