# Cocktail Search

A site thet lets you search for cocktailrecipes! 
Try it out: https://tovebr.github.io/cocktailsearch/

## The instructions I followed to build it

1. Create a search input in Component A.
2. When the user types something in the search input run a function that fetches cocktails
   where the searchterm matches the cocktails name.
3. Show those cocktails in a table in Component A with a title "Cocktails".
4. Each row in the table should have a column for the name of the cocktail, the alcohol
   percentage and instruction on how to make the cocktail. All this should be available in the api.
5. The fetch should start after the user has stopped typing for 1 second. This is to
   prevent the fetch to run after each typed letter. It should be a debounced function so to say.
6. Only show a maximum of three cocktails in the table.
7. Show a loading text when the request is being processed.
8. We also want to save the searchresult on each searchtearm in somekind of global state
   (hint: React context or Redux).
   If the user searched for something he or she already searched before, we should not use the
   fetch call to the API. Instead we want to retrieve the searchresult from the global store and
   show it instantly to the user.
9. We now want to add a fourth column. Every row should have a fourth column with a "Dislike"
   button. When pressing the "dislike" button the cocktail should now disappear from the "Cocktails"
   table and show up in a new table in Component B. This table should have a title called "Bad Cocktails".
10. The "Bad Cocktails" table should have the same 4 columns as the "Cocktails" table except that
    the fourth column rows should contain a "Like" buttons instead of "Dislike" buttons.
    When pressing a like button the function should now do the opposite of the "Dislike" button.
    Disappear from the dislike table and reappear in the like table.

Remember: the cocktails in each table should persist during each new search. If the user has "Disliked" a cocktail. That cocktail should only be visible in the "Dislike" table in Component B.
![cocktails](https://user-images.githubusercontent.com/70133569/218251826-ff30a491-034b-4ce1-958c-ae7b46cc586d.jpg)
