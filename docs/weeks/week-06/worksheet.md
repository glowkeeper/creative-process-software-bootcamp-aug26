# Week 6 Worksheet

## Remembering Choices

**Name:** ___________________________________

**Date:** ___________________________________

> **Big Idea:** Applications should remember what matters to their users.

## 1. Retrieve the Existing State Model

Where does `selectedIds` live in the Programme Builder?

____________________________________________________________________

Which values are calculated from it rather than stored?

____________________________________________________________________

What do you predict will happen when the browser refreshes?

____________________________________________________________________

## 2. Guided Build Checkpoints

- [ ] Part 1: I proved that the current application forgets its selection.
- [ ] Part 2: I gave the saved information one stable key.
- [ ] Part 3: I wrote a function that loads saved text and returns an array.
- [ ] Part 4: React uses that function to create the initial state.
- [ ] Part 5: An effect saves `selectedIds` after it changes.
- [ ] Part 6: I refreshed and verified that the selection remains.

## 3. Make the Persistence Decision

List the important state already in your own application:

| State | Should it survive a refresh? | Why? |
| --- | --- | --- |
| | | |
| | | |
| | | |

The one meaningful value I will persist today:

____________________________________________________________________

Why would a visitor expect it to survive?

____________________________________________________________________

What can still be calculated from it?

____________________________________________________________________

What should deliberately remain temporary?

____________________________________________________________________

## 4. Build the Smallest Working Version

- [ ] I identified the existing source of truth.
- [ ] I chose one clear and project-specific storage key.
- [ ] I load saved information when state is first created.
- [ ] I return a sensible initial value when nothing has been saved.
- [ ] I save the state after it changes.
- [ ] I convert structured information to and from JSON text.
- [ ] I do not store values that can be derived.
- [ ] I can explain every line I kept.

## 5. Test the Behaviour

- [ ] Change the state.
- [ ] Refresh the page.
- [ ] Close and reopen the tab.
- [ ] Change the state again.
- [ ] Inspect the saved value in browser storage.
- [ ] Confirm unrelated temporary interface state was not saved.

What was stored?

____________________________________________________________________

What happened after refresh?

____________________________________________________________________

## 6. Choose Project Data

Which entry point best supports your Directors Notes brief?

- [ ] `films-with-directors.json`
- [ ] `festival-programmes.json`
- [ ] `filmmaker-filmographies.json`
- [ ] A specific connected source file
- [ ] My project does not need the expanded archive yet

Which entities and properties does your interface actually need?

____________________________________________________________________

What missing value must your interface handle?

____________________________________________________________________

## 7. Does Your Project Need Routes?

Can ordinary links to sections within one page express the interface clearly?

____________________________________________________________________

If not, name two genuinely separate views:

| Link text | Path | View component |
| --- | --- | --- |
| | | |
| | | |

Trace one Showcase route before adapting it:

```text
NavLink `to`: ___________________________________
Route `path`: ___________________________________
Component:    ___________________________________
```

Routing is optional. Do not add it solely because the example contains it.

## 8. When Persistence Breaks

The exact storage key used when loading:

____________________________________________________________________

The exact storage key used when saving:

____________________________________________________________________

What value reaches `JSON.stringify()`?

____________________________________________________________________

What value comes back from `JSON.parse()`?

____________________________________________________________________

Which state appears in the effect's dependency array?

____________________________________________________________________

## 9. Explain Your Work

What does your application remember?

____________________________________________________________________

Where is it saved?

____________________________________________________________________

What remains temporary or derived, and why?

____________________________________________________________________

If AI helped, what did you test or change before keeping its suggestion?

____________________________________________________________________

## 10. End-of-Day Reflection

What can your visitor now do that they could not rely on this morning?

____________________________________________________________________

What is the most important thing you need to build or stabilise in Week 7?

____________________________________________________________________
