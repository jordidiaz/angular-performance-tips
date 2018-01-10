export interface ListItem {
  label: string;
  num: number;
}

export class ListGenerator {
  generate(labels: string[], numRange: [number, number], width: number): ListItem[] {
    const result: ListItem[] = [];
    for (let i = 0; i < width; i += 1) {
      result.push(this.generateNode(labels, numRange));
    }
    return result;
  }

  generateNumber(numRange: [number, number]) {
    const diff = numRange[1] - numRange[0];
    return numRange[0] + Math.floor(Math.random() * diff);
  }

  generateLabel(labels: string[]) {
    return labels[Math.floor(Math.random() * labels.length)];
  }

  private generateNode(labels: string[], numRange: [number, number]): ListItem {
    return {
      label: this.generateLabel(labels),
      num: this.generateNumber(numRange)
    };
  }
}
