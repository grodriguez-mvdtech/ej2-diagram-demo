ej.diagrams.Diagram.Inject(
  ej.diagrams.BpmnDiagrams,
  ej.diagrams.UndoRedo,
  ej.diagrams.DiagramContextMenu
);
ej.diagrams.SymbolPalette.Inject(ej.diagrams.BpmnDiagrams);

const bpmnShapes = [
  {
    height: 40,
    id: 'Event',
    shape: {
      event: {
        event: 'Start',
      },
      type: 'Bpmn',
      shape: 'Event',
    },
    width: 40,
  },
  {
    height: 80,
    id: 'Task',
    shape: {
      type: 'Bpmn',
      shape: 'Activity',
      activity: {
        activity: 'Task',
        task: {
          loop: 'None',
          type: 'User',
        },
      },
    },
    width: 140,
  },
  {
    height: 80,
    id: 'Transaction',
    shape: {
      type: 'Bpmn',
      shape: 'Activity',
      activity: {
        activity: 'SubProcess',
        subProcess: {
          type: 'Transaction',
          transaction: {
            cancel: { visible: false },
            failure: { visible: false },
            success: { visible: false },
          },
        },
      },
    },
    width: 140,
    // style: {
    //     strokeWidth: 2
    // },
  },
  {
    height: 40,
    id: 'Gateway',
    shape: {
      gateway: {
        type: 'Exclusive',
      },
      shape: 'Gateway',
      type: 'Bpmn',
    },
    width: 40,
  },
  {
    height: 40,
    id: 'DataObject',
    shape: {
      dataObject: {
        collection: false,
        type: 'None',
      },
      shape: 'DataObject',
      type: 'Bpmn',
    },
    width: 40,
  },
  {
    id: 'SubProcess',
    height: 250,
    shape: {
      shape: 'Activity',
      type: 'Bpmn',
      activity: {
        activity: 'SubProcess',
        subProcess: {
          collapsed: false,
          processes: [],
          transaction: {
            cancel: { visible: false },
            failure: { visible: false },
            success: { visible: false },
          },
          type: 'Transaction',
        },
      },
    },
    width: 520,
  },
  {
    height: 40,
    id: 'DataSource',
    shape: {
      shape: 'DataSource',
      type: 'Bpmn',
    },
    width: 40,
  },
  {
    height: 180,
    id: 'Group',
    shape: {
      shape: 'Group',
      type: 'Bpmn',
    },
    style: {
      borderWidth: 2,
      fill: 'transparent',
      strokeDashArray: '5,3',
    },
    width: 180,
  },
  {
    height: 30,
    id: 'Message',
    shape: {
      shape: 'Message',
      type: 'Bpmn',
    },
    width: 40,
  },
];
const swimlaneShapes = [
  {
    id: 'stackCanvas1',
    addInfo: { tooltip: 'Horizontal swimlane' },
    shape: {
      type: 'SwimLane',
      lanes: [
        {
          id: 'lane1',
          style: { strokeColor: '#757575' },
          height: 60,
          width: 150,
          header: {
            width: 50,
            height: 50,
            style: { strokeColor: '#757575', fontSize: 11 },
          },
        },
      ],
      orientation: 'Horizontal',
      isLane: true,
    },
    height: 60,
    width: 140,
    offsetX: 70,
    offsetY: 30,
  },
  {
    id: 'stackCanvas2',
    addInfo: { tooltip: 'Vertical swimlane' },
    shape: {
      type: 'SwimLane',
      lanes: [
        {
          id: 'lane1',
          style: { strokeColor: '#757575' },
          height: 150,
          width: 60,
          header: {
            width: 50,
            height: 50,
            style: { strokeColor: '#757575', fontSize: 11 },
          },
        },
      ],
      orientation: 'Vertical',
      isLane: true,
    },
    height: 140,
    width: 60,
    offsetX: 70,
    offsetY: 30,
  },
  {
    id: 'verticalPhase',
    addInfo: { tooltip: 'Vertical phase' },
    shape: {
      type: 'SwimLane',
      phases: [
        {
          style: {
            strokeWidth: 1,
            strokeDashArray: '3,3',
            strokeColor: '#757575',
          },
        },
      ],
      annotations: [{ text: '' }],
      orientation: 'Vertical',
      isPhase: true,
    },
    height: 60,
    width: 140,
    style: { strokeColor: '#757575' },
  },
  {
    id: 'horizontalPhase',
    addInfo: { tooltip: 'Horizontal phase' },
    shape: {
      type: 'SwimLane',
      phases: [
        {
          style: {
            strokeWidth: 1,
            strokeDashArray: '3,3',
            strokeColor: '#757575',
          },
        },
      ],
      annotations: [{ text: '' }],
      orientation: 'Horizontal',
      isPhase: true,
    },
    height: 60,
    width: 140,
    style: { strokeColor: '#757575' },
  },
];
const connectorSymbols = [
  {
    id: 'Link1',
    type: 'Orthogonal',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 40, y: 40 },
    targetDecorator: {
      shape: 'Arrow',
      style: { strokeColor: '#757575', fill: '#757575' },
    },
    style: { strokeWidth: 2, strokeColor: '#757575' },
  },
  {
    id: 'Link2',
    type: 'Orthogonal',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 40, y: 40 },
    targetDecorator: {
      shape: 'Arrow',
      style: { strokeColor: '#757575', fill: '#757575' },
    },
    style: { strokeWidth: 2, strokeDashArray: '4 4', strokeColor: '#757575' },
  },
  {
    id: 'Link3',
    type: 'Straight',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 40, y: 40 },
    targetDecorator: {
      shape: 'Arrow',
      style: { strokeColor: '#757575', fill: '#757575' },
    },
    style: { strokeWidth: 2, strokeColor: '#757575' },
  },
  {
    id: 'link4',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 40, y: 40 },
    type: 'Orthogonal',
    targetDecorator: { style: { strokeColor: '#757575', fill: '#757575' } },
    shape: {
      type: 'Bpmn',
      flow: 'Association',
      association: 'Directional',
    },
    style: {
      strokeDashArray: '2,2',
      strokeColor: '#757575',
    },
  },
];
const contextMenu = {
  show: true,
  items: [
    {
      id: 'Add',
      text: 'Add',
      items: [{ text: 'Add Event', iconCss: 'MVD', id: 'AddEvent' }],
    },
    {
      id: 'Activity-Type',
      text: 'Activity-Type',
      items: [
        {
          text: 'Collapsed sub-process',
          iconCss: 'e-bpmn-icons e-SubProcess',
          id: 'CollapsedSubProcess',
        },
        {
          text: 'Expanded sub-process',
          iconCss: 'e-bpmn-icons e-Task',
          id: 'ExpandedSubProcess',
        },
      ],
    },
    {
      id: 'Adhoc',
      text: 'Ad-Hoc',
      items: [
        {
          text: 'None',
          iconCss: 'e-adhocs e-bpmn-event e-bpmn-icons e-None',
          id: 'AdhocNone',
        },
        {
          text: 'Ad-Hoc',
          iconCss: 'e-adhocs e-bpmn-icons e-adhoc',
          id: 'AdhocAdhoc',
        },
      ],
    },
    {
      id: 'Boundry',
      text: 'Boundry',
      items: [
        {
          text: 'Default',
          iconCss: 'e-boundry e-bpmn-icons e-Default',
          id: 'Default',
        },
        {
          text: 'Call',
          iconCss: 'e-boundry e-bpmn-icons e-Call',
          id: 'BoundryCall',
        },
        {
          text: 'Event',
          iconCss: 'e-boundry e-bpmn-icons e-Event',
          id: 'BoundryEvent',
        },
      ],
    },
    {
      id: 'Collection',
      text: 'Collection',
      items: [
        {
          text: 'None',
          iconCss: 'e-collection e-bpmn-icons e-None',
          id: 'collectionNone',
        },
        {
          text: 'Collection',
          iconCss: 'e-collection e-bpmn-icons e-ParallelMI',
          id: 'Collectioncollection',
        },
      ],
    },
    {
      id: 'DataObject',
      text: 'Data Object',
      items: [
        {
          text: 'None',
          iconCss: 'e-data e-bpmn-icons e-None',
          id: 'DataObjectNone',
        },
        {
          text: 'Input',
          iconCss: 'e-data e-bpmn-icons e-DataInput',
          id: 'Input',
        },
        {
          text: 'Output',
          iconCss: 'e-data e-bpmn-icons e-DataOutput',
          id: 'Output',
        },
      ],
    },
    {
      id: 'DeftCall',
      text: 'Call',
      items: [
        { text: 'None', iconCss: 'e-call e-bpmn-icons e-None', id: 'CallNone' },
        {
          text: 'Call',
          iconCss: 'e-call e-bpmn-icons e-CallActivity',
          id: 'CallCall',
        },
      ],
    },
    {
      id: 'EventType',
      text: 'Event Type',
      items: [
        {
          text: 'Start',
          id: 'Start',
          iconCss: 'e-event e-bpmn-icons e-NoneStart',
        },
        {
          text: 'Intermediate',
          id: 'Intermediate',
          iconCss: 'e-event e-bpmn-icons e-InterruptingNone',
        },
        {
          text: 'NonInterruptingStart',
          id: 'NonInterruptingStart',
          iconCss: 'e-event e-bpmn-icons e-Noninterruptingstart',
        },
        {
          text: 'ThrowingIntermediate',
          id: 'ThrowingIntermediate',
          iconCss: 'e-event e-bpmn-icons e-InterruptingNone',
        },
        {
          text: 'NonInterruptingIntermediate',
          id: 'NonInterruptingIntermediate',
          iconCss: 'e-event e-bpmn-icons e-NoninterruptingIntermediate',
        },
        { text: 'End', id: 'End', iconCss: 'e-event e-bpmn-icons e-NoneEnd' },
      ],
    },
    {
      id: 'GateWay',
      iconCss: 'e-bpmn-icons e-Gateway',
      text: 'GateWay',
      items: [
        {
          text: 'None',
          iconCss: 'e-gate e-bpmn-icons e-None',
          id: 'GatewayNone',
        },
        {
          text: 'Exclusive',
          iconCss: 'e-gate e-bpmn-icons e-ExclusiveGatewayWithMarker',
          id: 'Exclusive',
        },
        {
          text: 'Inclusive',
          iconCss: 'e-gate e-bpmn-icons e-InclusiveGateway',
          id: 'Inclusive',
        },
        {
          text: 'Parallel',
          iconCss: 'e-gate e-bpmn-icons e-ParallelGateway',
          id: 'GatewayParallel',
        },
        {
          text: 'Complex',
          iconCss: 'e-gate e-bpmn-icons e-ComplexGateway',
          id: 'Complex',
        },
        {
          text: 'EventBased',
          iconCss: 'e-gate e-bpmn-icons e-EventBasedGateway',
          id: 'EventBased',
        },
        {
          text: 'ExclusiveEventBased',
          iconCss: 'e-gate e-bpmn-icons e-ExclusiveEventBased',
          id: 'ExclusiveEventBased',
        },
        {
          text: 'ParallelEventBased',
          iconCss: 'e-gate e-bpmn-icons e-ParallelEventBasedGatewaytostart',
          id: 'ParallelEventBased',
        },
      ],
    },
    {
      id: 'Loop',
      text: 'Loop',
      items: [
        { text: 'None', iconCss: 'e-loop e-bpmn-icons e-None', id: 'LoopNone' },
        {
          text: 'Standard',
          iconCss: 'e-loop e-bpmn-icons e-Loop',
          id: 'Standard',
        },
        {
          text: 'Parallel Multi-Instance',
          iconCss: 'e-loop e-bpmn-icons e-ParallelMI',
          id: 'ParallelMultiInstance',
        },
        {
          text: 'Sequence Multi-Instance',
          iconCss: 'e-loop e-bpmn-icons e-SequentialMI',
          id: 'SequenceMultiInstance',
        },
      ],
    },
    {
      id: 'TaskCompensation',
      text: 'Compensation',
      items: [
        {
          text: 'None',
          iconCss: 'e-compensation e-bpmn-icons e-None',
          id: 'CompensationNone',
        },
        {
          text: 'Compensation',
          iconCss: 'e-compensation e-bpmn-icons e-Compensation',
          id: 'CompensationCompensation',
        },
      ],
    },
    {
      id: 'TaskType',
      text: 'Task Type',
      items: [
        { text: 'None', id: 'TaskNone', iconCss: 'e-task e-bpmn-icons e-None' },
        {
          text: 'Service',
          id: 'Service',
          iconCss: 'e-task e-bpmn-icons e-ServiceTask',
        },
        {
          text: 'BusinessRule',
          id: 'BusinessRule',
          iconCss: 'e-task e-bpmn-icons e-BusinessRule',
        },
        {
          text: 'InstantiatingReceive',
          id: 'InstantiatingReceive',
          iconCss: 'e-task e-bpmn-icons e-InstantiatingReceive',
        },
        {
          text: 'Manual',
          id: 'Manual',
          iconCss: 'e-task e-bpmn-icons e-ManualCall',
        },
        {
          text: 'Receive',
          id: 'Receive',
          iconCss: 'e-task e-bpmn-icons e-InMessage',
        },
        {
          text: 'Script',
          id: 'Script',
          iconCss: 'e-task e-bpmn-icons e-ScriptCall',
        },
        {
          text: 'Send',
          id: 'Send',
          iconCss: 'e-task e-bpmn-icons e-InMessage',
        },
        { text: 'User', id: 'User', iconCss: 'e-task e-bpmn-icons e-UserCall' },
      ],
    },
    {
      id: 'TriggerResult',
      text: 'Trigger Result',
      items: [
        {
          text: 'None',
          id: 'TriggerNone',
          iconCss: 'e-trigger e-bpmn-icons e-None',
        },
        {
          text: 'Message',
          id: 'Message',
          iconCss: 'e-trigger e-bpmn-icons e-InMessage',
        },
        {
          text: 'Multiple',
          id: 'Multiple',
          iconCss: 'e-trigger e-bpmn-icons e-InMultiple',
        },
        {
          text: 'Parallel',
          id: 'Parallel',
          iconCss: 'e-trigger e-bpmn-icons e-InParallelMultiple',
        },
        {
          text: 'Signal',
          id: 'Signal',
          iconCss: 'e-trigger e-bpmn-icons e-InSignal',
        },
        {
          text: 'Timer',
          id: 'Timer',
          iconCss: 'e-trigger e-bpmn-icons e-InTimer',
        },
        {
          text: 'Cancel',
          id: 'Cancel',
          iconCss: 'e-trigger e-bpmn-icons e-CancelEnd',
        },
        {
          text: 'Escalation',
          id: 'Escalation',
          iconCss: 'e-trigger e-bpmn-icons e-InEscalation',
        },
        {
          text: 'Error',
          id: 'Error',
          iconCss: 'e-trigger e-bpmn-icons e-InError',
        },
        {
          text: 'Compensation',
          id: 'triggerCompensation',
          iconCss: 'e-trigger e-bpmn-icons e-InCompensation',
        },
        {
          text: 'Terminate',
          id: 'Terminate',
          iconCss: 'e-trigger e-bpmn-icons e-TerminateEnd',
        },
        {
          text: 'Conditional',
          id: 'Conditional',
          iconCss: 'e-trigger e-bpmn-icons e-InConditional',
        },
        {
          text: 'Link',
          id: 'Link',
          iconCss: 'e-trigger e-bpmn-icons e-ThrowLinkin',
        },
      ],
    },
    {
      id: 'Delete',
      text: 'Delete',
    },
  ],
  showCustomMenuOnly: true,
};

var nodes = [
  {
    id: 'start',
    width: 40,
    height: 40,
    offsetX: 35,
    offsetY: 180,
    shape: {
      type: 'Bpmn',
      shape: 'Event',
      event: { event: 'Start' },
    },
  },
  {
    id: 'subProcess',
    width: 520,
    height: 250,
    offsetX: 355,
    offsetY: 180,
    constraints:
      ej.diagrams.NodeConstraints.Default |
      ej.diagrams.NodeConstraints.AllowDrop,
    shape: {
      shape: 'Activity',
      type: 'Bpmn',
      activity: {
        activity: 'SubProcess',
        subProcess: {
          type: 'Transaction',
          collapsed: false,
          processes: [
            'processesStart',
            'service',
            'compensation',
            'processesTask',
            'error',
            'processesEnd',
            'user',
            'subProcessesEnd',
          ],
        },
      },
    },
  },
  {
    id: 'hazardEnd',
    width: 40,
    height: 40,
    offsetX: 305,
    offsetY: 370,
    shape: {
      type: 'Bpmn',
      shape: 'Event',
      event: { event: 'End' },
    },
    annotations: [
      {
        id: 'label2',
        content: 'Hazard',
        style: { fill: 'white', color: 'black' },
        verticalAlignment: 'Top',
        margin: { top: 20 },
      },
    ],
  },
  {
    id: 'cancelledEnd',
    width: 40,
    height: 40,
    offsetX: 545,
    offsetY: 370,
    shape: {
      type: 'Bpmn',
      shape: 'Event',
      event: { event: 'End' },
    },
    annotations: [
      {
        id: 'cancelledEndLabel2',
        content: 'Cancelled',
        style: { fill: 'white', color: 'black' },
        verticalAlignment: 'Top',
        margin: { top: 20 },
      },
    ],
  },
  {
    id: 'end',
    width: 40,
    height: 40,
    offsetX: 665,
    offsetY: 180,
    shape: {
      type: 'Bpmn',
      shape: 'Event',
      event: { event: 'End' },
    },
  },
  {
    id: 'processesStart',
    width: 30,
    height: 30,
    shape: {
      type: 'Bpmn',
      shape: 'Event',
      event: { event: 'Start' },
    },
    margin: { left: 40, top: 80 },
  },
  {
    id: 'service',
    style: { fill: '#6FAAB0' },
    width: 95,
    height: 70,
    shape: {
      type: 'Bpmn',
      shape: 'Activity',
      activity: {
        activity: 'Task',
        task: {
          type: 'Service',
          loop: 'parallelmultiinstance',
        },
      },
    },
    annotations: [
      {
        id: 'serviceLabel2',
        content: 'Book hotel',
        offset: { x: 0.5, y: 0.5 },
        style: { color: 'white' },
      },
    ],
    margin: { left: 110, top: 20 },
  },
  {
    id: 'compensation',
    width: 30,
    height: 30,
    shape: {
      type: 'Bpmn',
      shape: 'Event',
      event: { event: 'Intermediate', trigger: 'Compensation' },
    },
    margin: { left: 170, top: 100 },
  },
  {
    id: 'processesTask',
    style: { fill: '#F6B53F' },
    width: 95,
    height: 70,
    shape: {
      type: 'Bpmn',
      shape: 'Activity',
      activity: {
        activity: 'Task',
        task: {
          type: 'Service',
        },
      },
    },
    annotations: [
      {
        id: 'serviceLabel2',
        content: 'Charge credit card',
        offset: { x: 0.5, y: 0.6 },
        style: { color: 'white' },
      },
    ],
    margin: { left: 290, top: 20 },
  },
  {
    id: 'error',
    width: 30,
    height: 30,
    shape: {
      type: 'Bpmn',
      shape: 'Event',
      event: {
        event: 'Intermediate',
        trigger: 'Error',
      },
    },
    margin: { left: 350, top: 100 },
  },
  {
    id: 'processesEnd',
    width: 30,
    height: 30,
    shape: {
      type: 'Bpmn',
      shape: 'Event',
      event: { event: 'End' },
    },
    margin: { left: 440, top: 80 },
  },
  {
    id: 'user',
    style: { fill: '#E94649' },
    width: 90,
    height: 80,
    shape: {
      type: 'Bpmn',
      shape: 'Activity',
      activity: {
        activity: 'Task',
        task: {
          type: 'User',
          Compensation: true,
          offset: { x: 0.5, y: 1 },
        },
      },
    },
    annotations: [
      {
        id: 'serviceLabel2',
        content: 'Cancel hotel reservation',
        offset: { x: 0.5, y: 0.6 },
        style: { color: 'white' },
      },
    ],
    margin: { left: 240, top: 160 },
  },
  {
    id: 'subProcessesEnd',
    width: 30,
    height: 30,
    shape: {
      type: 'Bpmn',
      shape: 'Event',
      event: { event: 'End' },
    },
    margin: { left: 440, top: 210 },
  },
];
var connectors = [
  { id: 'connector1', sourceID: 'start', targetID: 'subProcess' },
  {
    id: 'connector2',
    sourceID: 'subProcess',
    sourcePortID: 'success',
    targetID: 'end',
  },
  {
    id: 'connector3',
    sourceID: 'subProcess',
    sourcePortID: 'failure',
    targetID: 'hazardEnd',
    type: 'Orthogonal',
    segments: [{ type: 'Orthogonal', length: 50, direction: 'Bottom' }],
    annotations: [
      {
        id: 'connector3Label2',
        content: 'Booking system failure',
        offset: 0.5,
        style: { fill: 'white' },
      },
    ],
  },
  {
    id: 'connector4',
    sourceID: 'subProcess',
    sourcePortID: 'cancel',
    targetID: 'cancelledEnd',
    type: 'Orthogonal',
    segments: [{ type: 'Orthogonal', length: 50, direction: 'Bottom' }],
  },
  {
    id: 'connector5',
    sourceID: 'processesStart',
    targetID: 'service',
    type: 'Orthogonal',
  },
  { id: 'connector6', sourceID: 'service', targetID: 'processesTask' },
  {
    id: 'connector7',
    sourceID: 'processesTask',
    targetID: 'processesEnd',
    type: 'Orthogonal',
  },
  {
    id: 'connector8',
    sourceID: 'compensation',
    targetID: 'user',
    type: 'Orthogonal',
    shape: {
      type: 'Bpmn',
      flow: 'association',
      association: 'Directional',
    },
    style: {
      strokeDashArray: '2,2',
    },
    segments: [
      { type: 'Orthogonal', length: 30, direction: 'Bottom' },
      { type: 'Orthogonal', length: 80, direction: 'Right' },
    ],
  },
  {
    id: 'connector9',
    sourceID: 'error',
    targetID: 'subProcessesEnd',
    type: 'Orthogonal',
    annotations: [
      {
        id: 'connector9Label2',
        content: 'Cannot charge card',
        offset: 0.5,
        style: { fill: 'white', color: 'black' },
      },
    ],
    segments: [{ type: 'Orthogonal', length: 50, direction: 'Bottom' }],
  },
];

window.diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '800px',
  nodes: nodes,
  connectors: connectors,
  contextMenuSettings: contextMenu,
  contextMenuOpen: contextMenuOpen,
  contextMenuClick: contextMenuClick,
  snapSettings: { constraints: ej.diagrams.SnapConstraints.ShowLines },
});
diagram.appendTo('#diagram');
diagram.fitToPage();

var palette = new ej.diagrams.SymbolPalette({
  expandMode: 'Multiple',
  symbolMargin: { left: 10, right: 10, top: 10, bottom: 10 },
  symbolHeight: 50,
  symbolWidth: 50,
  palettes: [
    {
      id: 'Bpmn',
      expanded: true,
      symbols: bpmnShapes,
      iconCss: 'shapes',
      title: 'BPMN Shapes',
    },
    {
      id: 'Connector',
      expanded: true,
      symbols: getConnectors(),
      iconCss: 'shapes',
      title: 'Connectors',
    },
    {
      id: 'Swimlane',
      expanded: true,
      symbols: swimlaneShapes,
      title: 'Swimlane Shapes',
    },
  ],
  width: '100%',
  height: '800px',
  getNodeDefaults: function (symbol) {
    symbol.style.strokeColor = '#757575';
  },
});
palette.appendTo('#symbolpalette');

function getConnectors() {
  var connectorSymbols = [
    {
      id: 'Link1',
      type: 'Orthogonal',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 40, y: 40 },
      targetDecorator: {
        shape: 'Arrow',
        style: { strokeColor: '#757575', fill: '#757575' },
      },
      style: { strokeWidth: 2, strokeColor: '#757575' },
    },
    {
      id: 'Link2',
      type: 'Orthogonal',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 40, y: 40 },
      targetDecorator: {
        shape: 'Arrow',
        style: { strokeColor: '#757575', fill: '#757575' },
      },
      style: { strokeWidth: 2, strokeDashArray: '4 4', strokeColor: '#757575' },
    },
    {
      id: 'Link3',
      type: 'Straight',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 40, y: 40 },
      targetDecorator: {
        shape: 'Arrow',
        style: { strokeColor: '#757575', fill: '#757575' },
      },
      style: { strokeWidth: 2, strokeColor: '#757575' },
    },
    {
      id: 'link4',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 40, y: 40 },
      type: 'Orthogonal',
      targetDecorator: { style: { strokeColor: '#757575', fill: '#757575' } },
      shape: {
        type: 'Bpmn',
        flow: 'Association',
        association: 'Directional',
      },
      style: {
        strokeDashArray: '2,2',
        strokeColor: '#757575',
      },
    },
  ];
  return connectorSymbols;
}
function contextMenuClick(args) {
  if (
    diagram.selectedItems.nodes.length > 0 &&
    args.item.parentObj.target === undefined
  ) {
    const node = diagram.selectedItems.nodes[0];
    let bpmnShape = node.shape;
    if (args.item.id === 'AddEvent') {
      console.log('ACA');
    } else if (args.item.id === 'Delete') {
      diagram.remove(node);
    } else {
      if (args.item.iconCss.indexOf('e-adhocs') > -1) {
        bpmnShape.activity.subProcess.adhoc =
          args.item.id === 'AdhocNone' ? false : true;
      }
      if (args.item.iconCss.indexOf('e-event') > -1) {
        bpmnShape.event.event = args.item.id;
      }
      if (args.item.iconCss.indexOf('e-trigger') > -1) {
        bpmnShape.event.trigger = args.item.text;
      }
      if (args.item.iconCss.indexOf('e-loop') > -1) {
        let loop = args.item.id === 'LoopNone' ? 'None' : args.item.id;
        if (bpmnShape.activity.activity === 'Task') {
          bpmnShape.activity.task.loop = loop;
        }
        if (bpmnShape.activity.activity === 'SubProcess') {
          bpmnShape.activity.subProcess.loop = loop;
        }
      }
      if (args.item.iconCss.indexOf('e-compensation') > -1) {
        let compensation = args.item.id === 'CompensationNone' ? false : true;
        if (bpmnShape.activity.activity === 'Task') {
          bpmnShape.activity.task.compensation = compensation;
        }
        if (bpmnShape.activity.activity === 'SubProcess') {
          bpmnShape.activity.subProcess.compensation = compensation;
        }
      }
      if (args.item.iconCss.indexOf('e-call') > -1) {
        let compensations = args.item.id === 'CallNone' ? false : true;
        if (bpmnShape.activity.activity === 'Task') {
          bpmnShape.activity.task.call = compensations;
        }
      }
      if (
        args.item.id === 'CollapsedSubProcess' ||
        args.item.id === 'ExpandedSubProcess'
      ) {
        if (args.item.id === 'ExpandedSubProcess') {
          bpmnShape.activity.activity = 'SubProcess';
          bpmnShape.activity.subProcess.collapsed = false;
        } else {
          bpmnShape.activity.activity = 'SubProcess';
          bpmnShape.activity.subProcess.collapsed = true;
        }
      }
      if (args.item.iconCss.indexOf('e-boundry') > -1) {
        let call = args.item.id;
        if (args.item.id !== 'Default') {
          call = args.item.id === 'BoundryEvent' ? 'Event' : 'Call';
        }
        bpmnShape.activity.subProcess.boundary = call;
      }
      if (args.item.iconCss.indexOf('e-data') > -1) {
        let data = args.item.id === 'DataObjectNone' ? 'None' : args.item.id;
        bpmnShape.dataObject.type = data;
      }
      if (args.item.iconCss.indexOf('e-collection') > -1) {
        let collection = args.item.id === 'Collectioncollection';
        bpmnShape.dataObject.collection = collection;
      }
      if (args.item.iconCss.indexOf('e-task') > -1) {
        let task = task === 'TaskNone' ? 'None' : args.item.id;
        if (bpmnShape.activity.activity === 'Task') {
          bpmnShape.activity.task.type = task;
        }
      }
      if (args.item.iconCss.indexOf('e-gate') > -1) {
        let gate = args.item.id.replace('Gateway', '');
        if (bpmnShape.shape === 'Gateway') {
          bpmnShape.gateway.type = gate;
        }
      }
      diagram.dataBind();
    }
  }
}
function contextMenuOpen(args) {
  var hiddenId = [];
  if (args.element.className !== 'e-menu-parent e-ul ') {
    hiddenId = [
      'Adhoc',
      'Loop',
      'taskCompensation',
      'Activity-Type',
      'Boundry',
      'DataObject',
      'collection',
      'DeftCall',
      'TriggerResult',
      'EventType',
      'TaskType',
      'GateWay',
    ];
  }
  if (diagram.selectedItems.nodes.length) {
    for (var i = 0; i < args.items.length; i++) {
      var item = args.items[i];
      var bpmnShape = diagram.selectedItems.nodes[0].shape;
      if (bpmnShape.shape !== 'DataObject' && bpmnShape.shape !== 'Gateway') {
        if (item.text === 'Ad-Hoc') {
          if (bpmnShape.activity.activity === 'SubProcess') {
            hiddenId.splice(hiddenId.indexOf(item.id), 1);
          }
        }
        if (
          item.text === 'Loop' ||
          item.text === 'Compensation' ||
          item.text === 'Activity-Type'
        ) {
          if (bpmnShape.shape === 'Activity') {
            hiddenId.splice(hiddenId.indexOf(item.id), 1);
          }
        }
        if (item.text === 'Boundry') {
          if (bpmnShape.activity.activity === 'SubProcess') {
            hiddenId.splice(hiddenId.indexOf(item.id), 1);
          }
        }
      }
      if (item.text === 'Data Object') {
        if (bpmnShape.shape === 'DataObject') {
          hiddenId.splice(hiddenId.indexOf(item.id), 1);
        }
      }
      if (item.text === 'Collection') {
        if (bpmnShape.shape === 'DataObject') {
          hiddenId.splice(hiddenId.indexOf(item.id), 1);
        }
      }
      if (item.text === 'Call') {
        if (
          bpmnShape.shape === 'Activity' &&
          bpmnShape.activity.activity === 'Task'
        ) {
          hiddenId.splice(hiddenId.indexOf(item.id), 1);
        }
      }
      if (item.text === 'Trigger Result') {
        if (bpmnShape.shape === 'Event') {
          hiddenId.splice(hiddenId.indexOf(item.id), 1);
        }
      }
      if (item.text === 'Event Type') {
        if (bpmnShape.shape === 'Event') {
          hiddenId.splice(hiddenId.indexOf(item.id), 1);
        }
      }
      if (item.text === 'Task Type') {
        if (
          bpmnShape.shape === 'Activity' &&
          bpmnShape.activity.activity === 'Task'
        ) {
          hiddenId.splice(hiddenId.indexOf(item.id), 1);
        }
      }
      if (item.text === 'GateWay') {
        if (bpmnShape.shape === 'Gateway') {
          hiddenId.splice(hiddenId.indexOf(item.id), 1);
        }
      }
      if (
        diagram.selectedItems.nodes.length > 0 &&
        args.parentItem &&
        args.parentItem.id === 'TriggerResult' &&
        bpmnShape.shape === 'Event'
      ) {
        var shape = bpmnShape;
        if (
          item.text !== 'None' &&
          (item.text === shape.event.event || item.text === shape.event.trigger)
        ) {
          hiddenId.push(item.id);
        }
        if (shape.event.event === 'Start') {
          if (
            item.text === 'Cancel' ||
            item.text === 'Terminate' ||
            item.text === 'Link'
          ) {
            hiddenId.push(item.id);
          }
        }
        if (
          shape.event.event === 'NonInterruptingStart' ||
          item.text === 'Link'
        ) {
          if (
            item.text === 'Cancel' ||
            item.text === 'Terminate' ||
            item.text === 'Compensation' ||
            item.text === 'Error' ||
            item.text === 'None'
          ) {
            hiddenId.push(item.id);
          }
        }
        if (shape.event.event === 'Intermediate') {
          if (item.text === 'Terminate') {
            hiddenId.push(item.id);
          }
        }
        if (shape.event.event === 'NonInterruptingIntermediate') {
          if (
            item.text === 'Cancel' ||
            item.text === 'Terminate' ||
            item.text === 'Compensation' ||
            item.text === 'Error' ||
            item.text === 'None' ||
            item.text === 'Link'
          ) {
            hiddenId.push(item.id);
          }
        }
        if (shape.event.event === 'ThrowingIntermediate') {
          if (
            item.text === 'Cancel' ||
            item.text === 'Terminate' ||
            item.text === 'Timer' ||
            item.text === 'Error' ||
            item.text === 'None' ||
            item.text === 'Pareller' ||
            item.text === 'Conditional'
          ) {
            hiddenId.push(item.id);
          }
        }
        if (shape.event.event === 'End') {
          if (
            item.text === 'Parallel' ||
            item.text === 'Timer' ||
            item.text === 'Conditional' ||
            item.text === 'Link'
          ) {
            hiddenId.push(item.id);
          }
        }
      }
      if (
        diagram.selectedItems.nodes.length > 0 &&
        args.parentItem &&
        args.parentItem.id === 'EventType' &&
        bpmnShape.shape === 'Event'
      ) {
        if (item.text === bpmnShape.event.event) {
          hiddenId.push(item.id);
        }
      }
    }
  }
  args.hiddenItems = hiddenId;
}
