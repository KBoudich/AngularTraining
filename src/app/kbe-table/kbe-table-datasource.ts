import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { AmbientContext } from '../ambient.context';

// TODO: Replace this with your own data model type
export interface KbeTableItem {
  id: number;
  scope: string;
  description: string;
}

const FUNDAMENTALS_DATA: KbeTableItem[] = [
  {id: 1, scope: 'Components', description: 'What is a component ?'},
  {id: 2, scope: 'Components', description: 'Creating the component'},
  {id: 3, scope: 'Components', description: 'Defining Metadata with a Decorator'},
  {id: 4,scope: 'Components', description: 'Importing What We Need'},
  {id: 5,scope: 'Components', description: 'Demo: Creating the App Component'},
  {id: 6,scope: 'Components', description: 'Bootstrapping Our App Component'},
  {id: 7,scope: 'Components', description: 'Demo: Bootstrapping Our App Component'},
  {id: 8,scope: 'Directives | Interpolation | Templates', description: 'Building a Template'},
  {id: 9,scope: 'Directives | Interpolation | Templates', description: 'Building the Component'},
  {id: 10,scope: 'Directives | Interpolation | Templates', description: 'Using a Component as a Directive'},
  {id: 11,scope: 'Directives | Interpolation | Templates', description: 'Binding with Interpolation'},
  {id: 12,scope: 'Directives | Interpolation | Templates', description: 'Adding Logic with Directives: ngIf'},
  {id: 13,scope: 'Directives | Interpolation | Templates', description: 'Adding Logic with Directives: ngFor'},
  {id: 14,scope: 'Data binding | Pipes', description: 'Property Binding'},
  {id: 15,scope: 'Data binding | Pipes', description: 'Handling Events with Event Binding'},
  {id: 16,scope: 'Data binding | Pipes', description: 'Handling Input with Two-way Binding'},
  {id: 17,scope: 'Data binding | Pipes', description: 'Transforming Data with Pipes'},
  {id: 18,scope: 'Advanced Components', description: 'Defining Interfaces'},
  {id: 19,scope: 'Advanced Components', description: 'Encapsulating Component Styles'},
  {id: 20,scope: 'Advanced Components', description: 'Using Lifecycle Hooks'},
  {id: 21,scope: 'Advanced Components', description: 'Building Custom Pipes'},
  {id: 22,scope: 'Advanced Components', description: 'Filtering a List'},
  {id: 23,scope: 'Nesting Components', description: 'Building a Nested Component'},
  {id: 24,scope: 'Nesting Components', description: 'Using a Nested Component'},
  {id: 25,scope: 'Nesting Components', description: 'Passing Data to a Nested Component Using @Input'},
  {id: 26,scope: 'Nesting Components', description: 'Passing Data from a Component Using @Output'},
  {id: 27,scope: 'Despendency injection', description: 'How DI works'},
  {id: 28,scope: 'Despendency injection', description: 'Building a service'},
  {id: 29,scope: 'Despendency injection', description: 'Registering a service'},
  {id: 30,scope: 'Despendency injection', description: 'Injection a service'},
  {id: 31,scope: 'Retrieving data from remote source', description: 'Observables and Reactive Extensions'},
  {id: 32,scope: 'Retrieving data from remote source', description: 'Sending an HTTP Request'},
  {id: 33,scope: 'Retrieving data from remote source', description: 'Demo: Sending an Http Request'},
  {id: 34,scope: 'Retrieving data from remote source', description: 'Exception Handling'},
  {id: 35,scope: 'Retrieving data from remote source', description: 'Subscribing to an Observable'},
  {id: 36,scope: 'Retrieving data from remote source', description: 'Demo: Subscribing to an Observable'},
  {id: 37,scope: 'Basic Navigation and Routing', description: 'Generating Code and Handling Undefined'},
  {id: 38,scope: 'Basic Navigation and Routing', description: 'How Routing Works'},
  {id: 39,scope: 'Basic Navigation and Routing', description: 'Configuring Routes'},
  {id: 40,scope: 'Basic Navigation and Routing', description: 'Demo: Configuring Routes'},
  {id: 41,scope: 'Basic Navigation and Routing', description: 'Wiring Routes to Actions'},
  {id: 42,scope: 'Basic Navigation and Routing', description: 'Placing the Views'},
  {id: 43,scope: 'Advanced Navigation and Routing', description: 'Passing Parameters to a Route'},
  {id: 44,scope: 'Advanced Navigation and Routing', description: 'Demo: Passing Parameters to a Route'},
  {id: 45,scope: 'Advanced Navigation and Routing', description: 'Activating a Route with Code'},
  {id: 46,scope: 'Advanced Navigation and Routing', description: 'Protecting Routes with Guards'},
  {id: 47,scope: 'Advanced Navigation and Routing', description: 'Demo: Protecting Routes with Guards'},
  {id: 48,scope: 'Modules', description: 'What Is a Module ?'},
  {id: 49,scope: 'Modules', description: 'Bootstrap Array'},
  {id: 50,scope: 'Modules', description: 'Declarations Array'},
  {id: 51,scope: 'Modules', description: 'Exports Array'},
  {id: 52,scope: 'Modules', description: 'Imports Array'},
  {id: 53,scope: 'Modules', description: 'Providers Array'},
  {id: 54,scope: 'Modules', description: 'Feature Modules'},
  {id: 55,scope: 'Modules', description: 'Demo: Feature Modules'},
  {id: 56,scope: 'Modules', description: 'Shared Module'},
  {id: 57,scope: 'Modules', description: 'Revisiting AppModule'},
  {id: 57,scope: 'Using CLI to build, test and deploy', description: 'Angular CLI Overview'},
  {id: 58,scope: 'Using CLI to build, test and deploy', description: 'ng new'},
  {id: 59,scope: 'Using CLI to build, test and deploy', description: 'ng serve'},
  {id: 60,scope: 'Using CLI to build, test and deploy', description: 'ng generate'},
  {id: 61,scope: 'Using CLI to build, test and deploy', description: 'ng test'},
  {id: 62,scope: 'Using CLI to build, test and deploy', description: 'ng build'}
];

const ADVANCED_DATA: KbeTableItem[] = [
  {id: 1, scope: 'General coding', description: 'The Single Responsibility Principale or SRP'},
  {id: 2, scope: 'General coding', description: 'Symbol naming'},
  {id: 3, scope: 'General coding', description: 'Use of immutability'},
  {id: 4,scope: 'General coding', description: 'Small functions'},
  {id: 5,scope: 'Module organization', description: 'Core module creation'},
  {id: 6,scope: 'Module organization', description: 'Shared module creation'},
  {id: 7,scope: 'Module organization', description: 'Feature module creation'},
  {id: 8,scope: 'Component best practices', description: 'Prefixing component selectors'},
  {id: 9,scope: 'Component best practices', description: 'Separating Component, CSS, and Template Files'},
  {id: 10,scope: 'Component best practices', description: 'Decorating Input and Output Properties'},
  {id: 11,scope: 'Component best practices', description: 'Delegating Complex Logic to Services'},
  {id: 12,scope: 'Component best practices', description: 'Component Member Sequence'},
  {id: 13,scope: 'Component best practices', description: 'Implementing Life Cycle Hook Interfaces'},
  {id: 14,scope: 'Component best practices', description: 'When to (and Not to) Create Components'},
  {id: 15,scope: 'Services best practices', description: 'Making services injectable'},
  {id: 16,scope: 'Services best practices', description: 'Using services to retrieve data'},
  {id: 17,scope: 'Services best practices', description: 'Service injector best practices'},
  {id: 18,scope: 'Performance best practices', description: 'Ahead-of-time compilation and the CLI'},
  {id: 19,scope: 'Performance best practices', description: 'Lazy loading feature module'},
  {id: 20,scope: 'Performance best practices', description: 'Monitoring bundle sizes'},
  {id: 21,scope: 'Performance best practices', description: 'Improving performance with OnPush Change Detection'},
  {id: 22,scope: 'Performance best practices', description: 'Pure and Impure Pipe performance'}
];

/**
 * Data source for the KbeTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class KbeTableDataSource extends DataSource<KbeTableItem> {
  data: KbeTableItem[] = FUNDAMENTALS_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
    switch (AmbientContext.currentDataSource) {
      case 'fundamentals':
        this.data = FUNDAMENTALS_DATA;
        break;
      case 'advanced':
        this.data = ADVANCED_DATA;
        break;
      default:
        this.data = [];
        break;
    }  
    
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<KbeTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: KbeTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: KbeTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'id': return compare(a.id, b.id, isAsc);
        case 'description': return compare(a.description, b.description, isAsc);
        case 'scope': return compare(+a.scope, +b.scope, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
