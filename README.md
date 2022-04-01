# Front

## Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Runs a set of basic tests for the app.
# Back

## Available Scripts

The project is built using React template of ASP.NET Core.

To run it locally with the server, you need to run the "dotnet run" command in the terminal from the server subdirectory. The client app will build automatically.

It can be done more easily if you use VS Code. Just press "F5" in the project dir to launch the server.
##

Open [http://localhost:5000](http://localhost:5000) to view it in your browser.

* To fetch data you should use the same endpoint - [http://localhost:5000](http://localhost:5000)
* Use [http://localhost:5000/wmi](http://localhost:5000/wmi) to load honda_wmi.json file from the server

## Tasks

- [ ] Move `honda_wmi.json` file's content to a backend API written in C# & ASP.NET Core 3.1
  - Data must be retrieved from the API and rendered instead of from the local browser
  - A spinner or a `Loading...` text must appear while the request is in flight
- [ ] Style `table` element that displays WMI table
- [ ] Render data sorted by `CreatedOn` and then by `WMI`
- [ ] Introduce a search box to accept user input, filter and render data
- [ ] Introduce a `Select` control to group by country
  - By default `View All` option must be selected, rendering all records
  - Distinct countries must be available for user selection
  - On selecting a country, data must be filtered down to just the country
  - Search and Country selection must work together

