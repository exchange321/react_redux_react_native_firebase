# Integration Experiment (Firebase)
An experiment of integrating React, Redux, React Router, React Native, and Firebase.

## Current Status:
* Integrating React Native
   * Problem: Can't share reducers and actions across apps due to babel not transpiling files not under project folder.
   * Solution: Separate WebApp and MobileApp first

## Finished:
- [x] Initialization
- [x] Reformating Code
- [x] Redux Integration (React Web)
- [x] Google Firebase Integration (React Web)
- [x] User Authentication (Firebase + React Web)
    
## Todos:
* Core: 
    - [ ] React Native Integration
    
* Optional:
    - [ ] Sharing Redux Store between WebApp and MobileApp

## Firebase Database Format & Rules
```
{
  "rules": {
    "teachers": {
      "$key": {
        ".write": "auth.uid !== null",
        ".validate": "newData.hasChildren(['name', 'bio', 'img_src'])",
        "name": {
          ".validate": "newData.isString() && newData.val().length > 0"
        },
        "bio": {
          ".validate": "newData.isString() && newData.val().length > 0"
        },
        "img_src": {
          ".validate": "newData.isString() && newData.val().length > 0"
        }
      }
    },
    "topics": {
      "$key": {
        ".write": "auth.uid !== null",
        ".validate": "newData.hasChildren(['name'])",
        "name": {
        	".validate": "newData.isString() && newData.val().length > 0"
        },
      },
    },
    "courses": {
      "$key": {
        ".write": "auth.uid !== null",
        ".validate": "newData.hasChildren(['title', 'description', 'img_src', 'topic'])",
        "title": {
          ".validate": "newData.isString() && newData.val().length > 0"
        },
        "description": {
          ".validate": "newData.isString() && newData.val().length > 0"
        },
        "img_src": {
          ".validate": "newData.isString() && newData.val().length > 0"
        },
        "topic": {
          ".validate": "newData.isString() && newData.val().length > 0"
        }
      }
    },
    ".read": "true"
  }
}
```