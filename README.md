# testing-react
Snapshot testing is a feature built into the Jest test runner

does your component changes often? 
If so, avoid snapshot testing. If you take a snapshot of a component the test passes but what happens when you modify the component? The test will fail, and you’ll have to delete the snapshot.

Snapshot tests are good for components not changing so often. 
Consider writing a snapshot test when you’re sure the component is stabilized.


