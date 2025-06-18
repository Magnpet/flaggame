// Data loader utility for Flag Games
// This module handles loading country ranking data from external JSON files

class DataLoader {
    constructor() {
        this.cache = new Map();
        this.loadingPromises = new Map();
    }

    async loadRankingData(dataType) {
        // Return cached data if available
        if (this.cache.has(dataType)) {
            return this.cache.get(dataType);
        }

        // Return existing promise if already loading
        if (this.loadingPromises.has(dataType)) {
            return this.loadingPromises.get(dataType);
        }

        // Create new loading promise
        const loadingPromise = this.fetchRankingData(dataType);
        this.loadingPromises.set(dataType, loadingPromise);

        try {
            const data = await loadingPromise;
            this.cache.set(dataType, data);
            this.loadingPromises.delete(dataType);
            return data;
        } catch (error) {
            this.loadingPromises.delete(dataType);
            throw error;
        }
    }

    async fetchRankingData(dataType) {
        try {
            const response = await fetch(`data/${dataType}-rankings.json`);
            if (!response.ok) {
                throw new Error(`Failed to load ${dataType} rankings: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error(`Error loading ${dataType} rankings:`, error);
            // Return empty object as fallback
            return {};
        }
    }

    // Load multiple ranking datasets
    async loadAllRankings(dataTypes) {
        try {
            const promises = dataTypes.map(type => this.loadRankingData(type));
            const results = await Promise.all(promises);
            
            const rankings = {};
            dataTypes.forEach((type, index) => {
                // Convert hyphenated names to camelCase for variable names
                const variableName = type.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase()) + 'Rankings';
                rankings[variableName] = results[index];
            });
            
            return rankings;
        } catch (error) {
            console.error('Error loading ranking data:', error);
            throw error;
        }
    }

    // Clear cache (useful for development/testing)
    clearCache() {
        this.cache.clear();
        this.loadingPromises.clear();
    }
}

// Create global instance
window.dataLoader = new DataLoader();

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DataLoader;
}