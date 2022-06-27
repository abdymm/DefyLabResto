# DEFYLABS TECHNICAL TEST

## Getting Started

### Requirements
- [x] Having tab navigation
- [x] Fetching list of places from internet
- [x] Fetching list of places from internet based on device location
- First tab 
    - [x] Should include list of places 
    - [x] Each of items have 2 buttons, view detail and view on map
    - [x] View detail button will open detail page
    - [x] View on map button will open map page (tab) - center the selected location
- Second tab
    - [x] Should show the list of places in map view (markers)
    - [x] Navigate to detail page whenever marker/pin pressed
- [x] Favorite location

### Quick Start
1. Clone the repo.
2. Install package ```$ yarn install```
3. Run iOS app with ```$ yarn ios```
4. Run Android app with ```$ yarn android```

### Stacks
- Navigation: React Navigation
- State Management: Redux, Rematch
- Network: axios
- Icons: react-native-vector-icons
- Location: react-native-geolocation-service
- Maps: react-native-maps

### Pattern and Project Structure

i use **Domain Driven Design** in this app espacally for project/folder structure, this can be apply for modular apps and this architecture is optimised for large scale apps.

`/common` for all common/generic things that can be used everywhere
`/feature` will consist each module/feature that include on the app
