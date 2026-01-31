export const wmoCodes = {
    0: { label: 'Clear Sky', icon: '☀️' },
    1: { label: 'Partly Cloudy', icon: '🌤️' },
    3: { label: 'Overcast', icon: '☁️' },
    61: { label: 'Rain', icon: '🌧️' },
    95: { label: 'Thunderstorm', icon: '⛈️' }
};

export function formatTime(isoString) {
    return new Date(isoString).getHours() + ":00";
}