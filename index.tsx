import MutableArrayDataProvider = require("ojs/ojmutablearraydataprovider");
import "ojs/ojlabel";
import "ojs/ojselectsingle";
import "ojs/ojchart";
import { ojChart } from "ojs/ojchart";
import { h } from "preact";

// ---------------------------------------------------------------------------------------------

type ChartType = {
  id: string; 
  value: string; 
  label: string;
}

const chartTypeData = [
  {id: '1', value: 'pie', label: 'Pie Chart'},
  {id: '2', value: 'bar', label: 'Bar Chart'},
];

const chartTypesDP: MutableArrayDataProvider<ChartType["value"], ChartType> = new MutableArrayDataProvider(chartTypeData, {keyAttributes: "value"});


// ---------------------------------------------------------------------------------------------

type ChartItem = {
  id: string; 
  series: string; 
  group: string;
  value: number;
}

const chartData = [
  { id: 0, series: "Baseball", group: "Group A", value: 42 },
  { id: 1, series: "Baseball", group: "Group B", value: 34 },
  { id: 2, series: "Bicycling", group: "Group A", value: 55 },
  { id: 3, series: "Bicycling", group: "Group B", value: 30 },
  { id: 4, series: "Skiing", group: "Group A", value: 36 },
  { id: 5, series: "Skiing", group: "Group B", value: 50 },
  { id: 6, series: "Soccer", group: "Group A", value: 22 },
  { id: 7, series: "Soccer", group: "Group B", value: 46 },
];

const chartDataProvider: MutableArrayDataProvider<ChartItem["id"], ChartItem> = new MutableArrayDataProvider(chartData, {keyAttributes: "id"});

// ---------------------------------------------------------------------------------------------

let val: any;

export function Content() {


  const chartItem = (item: ojChart.ItemTemplateContext<ChartItem["id"], ChartItem>) => {
    return <oj-chart-item value={item.data.value} groupId={[item.data.group]} seriesId={item.data.series}></oj-chart-item>;
  };

  return (
    <div class="oj-web-applayout-max-width oj-web-applayout-content">
      <h1>This is my first experiment in VDOM OJET Project!!!!</h1>
      <div id="itemDetailsContainer">
          <oj-label for="basicSelect">Select Chart: </oj-label>

          <oj-select-single
                  id="basicSelect"
                  data={chartTypesDP}
                  value="pie">
          </oj-select-single>

          <oj-chart id="Chart"
                    type="pie"
                    data={chartDataProvider}>
              <template slot="itemTemplate" render={chartItem}></template>
          </oj-chart>
      </div>
    </div>
  );

};
