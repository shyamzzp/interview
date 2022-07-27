---
tree_title: Location Lockers System Design
description: System Design for Location Lockers.
last_modified: 2022-06-25T15:13:29.1329
---

# Location Lockers System Design

## Introduction & Requirements of the System

When shopping at Amazon, during checkout, you can select an Amazon locker as delivery address. Design a service that provides the front-end with available lockers to show them on a map/list for the user to select one.
Later: What happens if a package is delivered to a locker by Amazon delivery man?

<div class="section-container pl0 pr0">
<div class="section-item pl0">

## Assumptions

-   There will be multiple locker locations available for a region.
-   Each locker location can have multiple locker each having their different sizes ( width, height, length) and other details like what's the ground height of the locker etc.
-   The user can select a locker location from the list of available locker locations.

</div>
<div class="section-item">

### Clarifying Questions

-   Can we place multiple package within a locker or single package per locker?
-   Do we need to consider other factors while deciding the locker like locker height, weight it can handle etc.
-   Do we need to consider a scenario where a item can't be placed in a locker like fridge, cycle, washing machine or lets say we have a locker for any kind of item.
-   For each item there will be a package. eg. for fridge, cycle, machine there will be a package so do we need to decide a locker based on the package size or the item size.

</div>
</div>

## Design

### Package Service

-   To design our locker suggestion service, we need the items details like item_id, package details ( height, width, length, weight )in which that item will be packaged. 
<mark>Package Service</mark> - this service will give the package details based upon the item_id. One thing to keep in mind is that we need to consider the package size not the item size as many times we have seen that the package size is much larger that the item size. But for simple scenarios, we can assume that the package size is same as that of the item size.
-   Each locker location can have multiple locker each having their different sizes ( width, height, length) and other details like what's the ground height of the locker etc.
-   The user can select a locker location from the list of available locker locations.


### Locker Suggestion Service

-   A method of this service will suggest the near by lockers based upon the delivery location and max distance passed in the request and in response we can return the locker_location_ids.
-   A method to suggest the available & appropriate locker for a location What are the parameters we can expect from front end considering.

```json
{
    "locker_location_id" : xx,
    "items_ids" : [ item_id1, item_id2],
    "user_approachable_height" : yy
}
```

-   Now, this service internal logic can go as :
    -   will call the package service to get the package size for the items based upon the item_id
    -   will does the calculation to club two or more packages in the available lockers and if all the packages can be placed in the available lockers then return the below response.

```json
{
    "item_id1" : available,
    "item_id2" : available,
    "item_id3" : available,
    "item_id4" : available
    "item_id5" : not available ( reasons can be:  no more locker available, or weight was higher than all the available lockers or user's accessible height was lesser than the locker's height.
}
```
And, the UI can show the above response in some graphical way.
-   Now, lets say users want to proceed with the items 1,2,3,4 then in that case we have to reserve the lockers on that order_id and once, that order is confirmed then we need to mark the lockers as <mark>Not-Available</mark>.
-   A method to reserve the locker which expect the <mark>order_id</mark> & <mark>item_id</mark> in request. [IMP] Before marking the lockers as reserve it will again do the does the above calculation and then assign the mark the locker as reserved and assign the order_id to that locker.
-   A method to mark the locker as NA which expect the <mark>order_id</mark> and it will mark all the reserved lockers associated to that <mark>order_id</mark>.

<b>Later: What happens if a package is delivered to a locker by Amazon delivery man?</b>
<b>Clarifying Questions</b>

1.   Is there any code using which we can open the locker. So, when the locker is marked NA when order is placed then a code will be generated in the system and shared with the delivery man when assigned.
2.   Delivery man will use that code to open the locker, place the item and close. This means delivery has happened
3.   Now, the system will generate the code for the user to collect the package.

## References

-   [Location of Lockers - Leetcode](https://leetcode.com/discuss/interview-question/system-design/2296964/Amazon-or-Onsite-SDE2-or-System-Design-or-Location-of-Lockers)
