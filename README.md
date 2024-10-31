# Weather App 🌤️

This is a simple weather application built using HTML, CSS, and JavaScript. It allows users to search for any city worldwide and get the current weather information. The project fetches data from the WeatherAPI and displays it on the screen in an easy-to-read format.

## How To Use

- The app contains a search bar where users can enter a city name.
- When the **Search** button is clicked, a request is sent to the WeatherAPI.
- The current weather information for the searched city is displayed below, including:
    - **City Name**
    - **Temperature**
    - **Weather Condition**
    - **Humidity**
    - **Wind Speed**

## Set it up yourself

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/qrofeus/weather-app.git
   cd weather-app
   ```

2. **Install Dependencies**:
   No dependencies are required for this frontend project. Just ensure you have an internet connection for API requests.

3. **Get Your WeatherAPI Key**:
    - Sign up on [WeatherAPI](https://www.weatherapi.com/) to get your free API key.

4. **Configure GitHub Secret**:
    - Go to your repository on GitHub.
    - Navigate to **Settings** > **Secrets and variables** > **Actions**.
    - Add a new secret named `WEATHER_API_KEY` with your WeatherAPI key as the value.

5. **Deploy with GitHub Actions**:
    - The project uses GitHub Actions to deploy to GitHub Pages and inject the API key securely.
    - Any changes pushed to the `main` branch will automatically trigger deployment.
    - You can view your live site under **Settings** > **Pages** in the GitHub repository.

### GitHub Actions Workflow

The GitHub Actions workflow is set up to:

1. Inject the WeatherAPI key from GitHub Secrets into `script.js` during deployment.
2. Deploy the code to GitHub Pages.

The workflow file `.github/workflows/deploy.yml` contains the deployment configuration, ensuring the API key is securely handled and not exposed in the repository code.
