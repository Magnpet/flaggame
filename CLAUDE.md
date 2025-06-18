# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a flag-based guessing game with multiple game modes built as a single-page web application using vanilla HTML, CSS, and JavaScript. The game features:

- **Flag Game (Classic)**: Players match flags to 8 ranking categories (HDI, Population, Olympic Medals, etc.)
- **Flag Duel**: Head-to-head comparison of two countries in a specific category  
- **Flag Reveal**: Progressive flag reveal puzzle where players guess the country
- **Flag Puzzle**: Merged flag puzzle where players identify component countries

## Architecture

### Core Structure
- `index.html`: Single-page application with all game modes embedded
- `script.js`: Main game logic (~68k tokens, contains all game modes and data)
- `style.css`: Complete styling with CSS variables for theming and responsive design
- `flags_images/`: Directory containing flag assets (PNG files named by country code)
- `images/world.png`: Background world map image

### Key Technical Details

#### Game Mode System
- Uses `.game-container` elements with `active` class to show/hide modes
- Mode switching handled through dropdown in header
- Each mode has its own container: `#flagDuelContainer`, `#flagRevealContainer`, etc.

#### Data Structure
- Country rankings stored as JavaScript objects within `script.js`
- Categories include: HDI, Population, Olympic Medals, Life Expectancy, Land Area, Average Temperature, GDP per Capita, Highest Elevation
- Each category has highest/lowest variants for variety

#### Theming System
- CSS variables defined in `:root` for light theme
- Dark mode implemented via `body.dark-mode` class
- Theme persistence handled through localStorage

#### Milestones/Achievements
- Progress tracking system with completion states
- Notification system for achievement unlocks
- Grid-based layout similar to gaming platforms

## Development Commands

This is a static web application with no build process. To develop:

1. **Local Development**: Open `index.html` directly in a browser or use a local server
2. **Testing**: Manual testing in browser (no automated test framework)
3. **Assets**: Flag images must be properly named (country code + .png)

## Common Development Tasks

### Adding New Countries
- Add flag image to `flags_images/` with proper country code naming
- Update ranking data in `script.js` for all categories
- Ensure country name translations exist if supporting multiple languages

### Adding New Categories
- Define category data structure in `script.js`
- Add corresponding HTML elements in `index.html`
- Style new category boxes in `style.css`
- Update game logic to handle new category

### Modifying Game Modes
- Each game mode is self-contained within `script.js`
- UI elements are embedded in `index.html` with `display: none` initially
- Styling is mode-specific with prefixed class names

### Theme Customization
- Modify CSS variables in `:root` for light theme colors
- Update `body.dark-mode` selectors for dark theme variants
- Color scheme uses consistent primary/secondary color system

## Code Conventions

- **CSS**: Uses CSS custom properties extensively, BEM-like naming for game-specific classes
- **JavaScript**: Vanilla JS with event-driven architecture, no frameworks
- **HTML**: Semantic structure with accessibility considerations
- **File Organization**: All code in three main files for simplicity

## Important Notes

- Game data is embedded in JavaScript (no external APIs)
- Country flag assets are required for game functionality
- Responsive design supports mobile and desktop
- Achievement system persists progress in localStorage
- All game modes share common styling foundation but have mode-specific styles