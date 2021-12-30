# NevskySupply
<pre>
This is a frontend calculator for the supply part of the Nevsky boardgame. To operate it simply open it as a webpage.

Nevsky game: https://www.gmtgames.com/p-696-nevsky-teutons-and-rus-in-collision-1240-1242.aspx
Official rulebook's explanation of supply rules: https://gmtwebsiteassets.s3-us-west-2.amazonaws.com/Nevsky/Nevsky_RULES-FINAL.pdf



Below follows a full description of the features of the app:

Input:
The user can adjust the number of carts/boats/sleds/ships, toggle their factional bonus, and select a lord (Teuton lords are on the upper row, Russians on the lower).
They can also click a locale on the map to set that as their starting position (circled in black).

Output:
The number of provender received from the used supply routes is displayed.
Also, the locales used in the used supply routes are circled in red.
Generally, fewer and shorter supply routes are favored so long as provender is maximized.
Output is updated whenever the user gives input (with the exception that invalid input will sometimes give a popup error)

Valid supply routes:
Except for the starting location, they must not pass through a stronghold (region with boxed name) in enemy territory (Novgorodan Rus for the Teutons, Danish Estonia and Crusader Livonia for the Russians)
They must not use a number of trackways exceeding carts
They must not use a number of waterways exceeding boats
They must not use a number of trackways plus waterways exceeding sleds

Provender received from supply routes:
Up to 2 for 2 seats (coat of arms of the lord). However, if the bonus is enabled, a Teuton lord counts commanderies (white shield with black cross) as a seat, and a Russian lord counts Novgorod as a seat.
Up to 2 for 2 ships, if and only if the supply routes include a least one port for a Teuton lord or Novgorod for a Russian lord.
Therefore, the maximum possible provender is 4.
</pre>
