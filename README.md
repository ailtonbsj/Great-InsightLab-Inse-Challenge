# Challenge GREAT Insight Labs

Full Stack Developer Challenge where participants have to create dashboards with data from the Socioeconomic Level (Inse) of Brazil.

Project was hosted on: [https://great-insight-lab-inse-challenge.vercel.app](https://great-insight-lab-inse-challenge.vercel.app)

## Converting XLSX to JSON

```bash
# Install Tools
sudo apt install gnumeric python3-pip jq
pip3 install csvkit

# Convert XLSX to CSV
ssconvert INSE_2021_escolas.xlsx inse-2021-escolas.csv
head -n 3 inse-2021-escolas.csv > sample.csv

# CVS to JSON
csvjson --no-inference --blanks sample.csv | jq
csvjson --no-inference --blanks inse-2021-escolas.csv > inse-2021-escolas.json
```

## Projects

```bash
# Create frontend project
npm create vite frontend
cd frontend
npm i

# Install PrimeReact
npm i primereact
npm i primeicons
npm i primeflex

# Install Router DOM
npm i react-router-dom

# Install ChartJS
npm install chart.js

# Run project
npm run dev
```

## References

[Color Blender](https://meyerweb.com/eric/tools/color-blend/#EF4444:22C55E:6:hex)
