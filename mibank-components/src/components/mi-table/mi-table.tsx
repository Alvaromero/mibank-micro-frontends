import { Component, Prop } from "@stencil/core";

export interface HTMLTableElement extends HTMLElement {
  headings?: Array<string>;
  data?: Array<Array<any>>;
}

@Component({
  tag: "mi-table",
  styleUrl: "mi-table.css",
  shadow: true
})
export class MiTable {
  @Prop() headings: Array<string> = [];
  @Prop() data: Array<any> = [];
  @Prop() ref?: any;

  private generateHeader(): JSX.Element {
    const row = this.headings.map(item => <th>{item}</th>);
    return <tr>{row}</tr>;
  }

  private generateGrid(): JSX.Element {
    const row = this.data.map(row => {
      const result = row.map(cell => <td>{cell}</td>);
      return <tr>{result}</tr>;
    });
    return row;
  }

  render() {
    const header = this.generateHeader();
    const grid = this.generateGrid();

    return (
      <table>
        <slot name="above" />
        {header}
        {grid}
        <slot name="below" />
      </table>
    );
  }
}
