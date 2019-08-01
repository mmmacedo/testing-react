# testing-react
Snapshot testing is a feature built into the Jest test runner

does your component changes often? 
If so, avoid snapshot testing. If you take a snapshot of a component the test passes but what happens when you modify the component? The test will fail, and you’ll have to delete the snapshot.

Snapshot tests are good for components not changing so often. 
Consider writing a snapshot test when you’re sure the component is stabilized.


A functional test, or End to End test is a way of testing web applications from the user’s perspective.
For the scope of this guide functional testing === end to end testing).

Do not test the implementation. Test the component from the user’s perspective. In other words: test what the user should see.

Mock test in development statment.
Call the rights API`s in production statment.

Cypress is a Javascript End to End testing framework.
Cypress gives you a solid platform for writing and automating UI tests.

