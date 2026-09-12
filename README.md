# LearnHub Mobile (React Native + Expo)

This is the mobile companion to the **LearnHub** course-management website
(React + Vite). It mirrors the **student experience**: browsing courses,
enrolling (free or paid trial), watching lessons, tracking progress, and
earning certificates — using the same static course data the website uses
(`data/courseData.js`), since the website itself has no backend yet.

## Why Expo instead of "Vite"?

Vite is a bundler for **web** projects. React Native apps are built and run
with **Expo** — it's the closest equivalent: a fast dev server, hot reload,
and one command to preview on your phone (`expo start` + the **Expo Go** app),
the same way `vite dev` gives you instant preview on the web.

## Getting started

You'll need Node.js installed. Then, from this folder:

```bash
npm install
npx expo start
```

This prints a QR code. Scan it with the **Expo Go** app (iOS/Android) to run
the app on your phone, or press `i` / `a` in the terminal to open an iOS
simulator / Android emulator if you have one installed.

## Project structure

```
mobile/
├── App.js                     # Root component: providers + navigation
├── src/
│   ├── screens/                # One file per screen (mirrors pages/*.jsx)
│   ├── components/             # CourseCard, buttons, AuthGate, etc.
│   ├── navigation/              # Bottom tabs + root stack
│   ├── context/                 # AuthContext & CoursesContext (AsyncStorage)
│   ├── data/                    # courseData.js + coursePlayers.js (ported)
│   └── theme/                   # Shared colors/spacing/typography
```

## How the website's ideas map onto the app

| Website (React + Vite)                          | Mobile (React Native + Expo)                     |
|---------------------------------------------------|----------------------------------------------------|
| `react-router-dom` `<Routes>`                     | `@react-navigation` stack + bottom tabs             |
| `localStorage`                                    | `@react-native-async-storage/async-storage`         |
| Navbar + side menu                                | Bottom tab bar (Home, Courses, My Courses, Progress, Profile) |
| `<img>` / CSS                                     | `<Image>` / `StyleSheet` (design tokens in `theme.js`) |
| YouTube `<iframe>` in FreexPaid pages             | `react-native-webview` pointed at the same embed URL |
| Camera/file input on Profile page                 | `expo-image-picker` (camera + photo library)         |

## What's included (Student experience)

- Home, Courses (search + category filter), Course Details (enroll popups)
- Login / Register (with Student/Instructor role selection)
- Payment (mock, same 4 payment methods as the site)
- Course Player (video + topic list, for all 6 courses)
- My Courses, Progress, Certificates, Profile (with photo picker)

## What's intentionally not built yet

- **Instructor & Admin dashboards** — the role is captured at registration,
  but only the student flow has screens. This was scoped as a starting
  skeleton; the instructor/admin screens can be added the same way.
- **A real backend** — everything currently mirrors the website's
  `localStorage`-only, no-backend state, using `AsyncStorage` instead. When
  a real API exists, only `AuthContext.js` and `CoursesContext.js` need to
  change to call it — no screen code should need to change.

## Notes

- App icon/splash colors are set in `app.json`; drop real assets into an
  `assets/` folder (icon.png, splash.png) before building for app stores.
- Course images are pulled from the same Unsplash URLs the website uses.
