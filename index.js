ej.diagrams.Diagram.Inject(
  ej.diagrams.BpmnDiagrams,
  ej.diagrams.UndoRedo,
  ej.diagrams.DiagramContextMenu
);
ej.diagrams.SymbolPalette.Inject(ej.diagrams.BpmnDiagrams);
window.diagram;
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
var bpmnShapes = [
  {
    id: 'Start',
    width: 35,
    height: 35,
    shape: {
      type: 'Bpmn',
      shape: 'Event',
      event: { event: 'Start' },
    },
  },
  {
    id: 'NonInterruptingIntermediate',
    width: 35,
    height: 35,
    shape: {
      type: 'Bpmn',
      shape: 'Event',
      event: { event: 'NonInterruptingIntermediate' },
    },
  },
  {
    id: 'End',
    width: 35,
    height: 35,
    offsetX: 665,
    offsetY: 230,
    shape: {
      type: 'Bpmn',
      shape: 'Event',
      event: { event: 'End' },
    },
  },
  {
    id: 'Task',
    width: 35,
    height: 35,
    offsetX: 700,
    offsetY: 700,
    shape: {
      type: 'Bpmn',
      shape: 'Activity',
      activity: {
        activity: 'Task',
      },
    },
  },
  {
    id: 'Transaction',
    width: 35,
    height: 35,
    offsetX: 300,
    offsetY: 100,
    constraints:
      ej.diagrams.NodeConstraints.Default |
      ej.diagrams.NodeConstraints.AllowDrop,
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
  },
  {
    id: 'Task_Service',
    width: 35,
    height: 35,
    offsetX: 700,
    offsetY: 700,
    shape: {
      type: 'Bpmn',
      shape: 'Activity',
      activity: {
        activity: 'Task',
        task: { type: 'Service' },
      },
    },
  },
  {
    id: 'Gateway',
    width: 35,
    height: 35,
    offsetX: 100,
    offsetY: 100,
    shape: { type: 'Bpmn', shape: 'Gateway', gateway: { type: 'Exclusive' } },
  },
  {
    id: 'DataObject',
    width: 35,
    height: 35,
    offsetX: 500,
    offsetY: 100,
    shape: {
      type: 'Bpmn',
      shape: 'DataObject',
      dataObject: { collection: false, type: 'None' },
    },
  },
  {
    id: 'subProcess',
    width: 520,
    height: 250,
    offsetX: 355,
    offsetY: 230,
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
          processes: [],
          transaction: {
            cancel: { visible: false },
            failure: { visible: false },
            success: { visible: false },
          },
        },
      },
    },
  },
];
var contextMenu = {
  show: true,
  items: [
    {
      text: 'Ad-Hoc',
      id: 'Adhoc',
      items: [
        {
          text: 'None',
          iconCss: 'e-adhocs e-bpmn-event e-bpmn-icons e-None',
          id: 'AdhocNone',
        },
        {
          iconCss: 'e-adhocs e-bpmn-icons e-adhoc',
          text: 'Ad-Hoc',
          id: 'AdhocAdhoc',
        },
      ],
    },
    {
      text: 'Loop',
      id: 'Loop',
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
      text: 'Compensation',
      id: 'taskCompensation',
      items: [
        {
          text: 'None',
          iconCss: 'e-compensation e-bpmn-icons e-None',
          id: 'CompensationNone',
        },
        {
          iconCss: 'e-compensation e-bpmn-icons e-Compensation',
          text: 'Compensation',
          id: 'CompensationCompensation',
        },
      ],
    },
    {
      text: 'Activity-Type',
      id: 'Activity-Type',
      items: [
        {
          text: 'Collapsed sub-process',
          iconCss: 'e-bpmn-icons e-SubProcess',
          id: 'CollapsedSubProcess',
        },
        {
          iconCss: 'e-bpmn-icons e-Task',
          text: 'Expanded sub-process',
          id: 'ExpandedSubProcess',
        },
      ],
    },
    {
      text: 'Boundry',
      id: 'Boundry',
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
      text: 'Data Object',
      id: 'DataObject',
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
      text: 'Collection',
      id: 'collection',
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
      text: 'Call',
      id: 'DeftCall',
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
      text: 'Trigger Result',
      id: 'TriggerResult',
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
      text: 'Event Type',
      id: 'EventType',
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
      text: 'Task Type',
      id: 'TaskType',
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
      text: 'GateWay',
      id: 'GateWay',
      iconCss: 'e-bpmn-icons e-Gateway',
      items: [
        {
          text: 'None',
          id: 'GatewayNone',
          iconCss: 'e-gate e-bpmn-icons e-None',
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
  ],
  showCustomMenuOnly: true,
};
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

function dragEnter(args) {
  var obj = args.element;
  if (obj instanceof ej.diagrams.Node) {
    if (!obj.shape.activity.subProcess.collapsed) {
      obj.shape.activity.subProcess.transaction.cancel.visible = true;
      obj.shape.activity.subProcess.transaction.failure.visible = true;
      obj.shape.activity.subProcess.transaction.success.visible = true;
    } else {
      var oWidth = obj.width;
      var oHeight = obj.height;
      var ratio = 100 / obj.width;
      obj.width = 100;
      obj.height *= ratio;
      obj.offsetX += (obj.width - oWidth) / 2;
      obj.offsetY += (obj.height - oHeight) / 2;
    }
  }
}

function contextMenuClick(args) {
  if (diagram.selectedItems.nodes.length > 0) {
    var bpmnShape = diagram.selectedItems.nodes[0].shape;
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
      var loop = args.item.id === 'LoopNone' ? 'None' : args.item.id;
      if (bpmnShape.activity.activity === 'Task') {
        bpmnShape.activity.task.loop = loop;
      }
      if (bpmnShape.activity.activity === 'SubProcess') {
        bpmnShape.activity.subProcess.loop = loop;
      }
    }
    if (args.item.iconCss.indexOf('e-compensation') > -1) {
      var compensation = args.item.id === 'CompensationNone' ? false : true;
      if (bpmnShape.activity.activity === 'Task') {
        bpmnShape.activity.task.compensation = compensation;
      }
      if (bpmnShape.activity.activity === 'SubProcess') {
        bpmnShape.activity.subProcess.compensation = compensation;
      }
    }
    if (args.item.iconCss.indexOf('e-call') > -1) {
      var compensations = args.item.id === 'CallNone' ? false : true;
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
      call = args.item.id;
      if (args.item.id !== 'Default') {
        call = args.item.id === 'BoundryEvent' ? 'Event' : 'Call';
      }
      bpmnShape.activity.subProcess.boundary = call;
    }
    if (args.item.iconCss.indexOf('e-data') > -1) {
      var data = args.item.id === 'DataObjectNone' ? 'None' : args.item.id;
      bpmnShape.dataObject.type = data;
    }
    if (args.item.iconCss.indexOf('e-collection') > -1) {
      var collection = args.item.id === 'Collectioncollection' ? true : false;
      bpmnShape.dataObject.collection = collection;
    }
    if (args.item.iconCss.indexOf('e-task') > -1) {
      var task = task === 'TaskNone' ? 'None' : args.item.id;
      if (bpmnShape.activity.activity === 'Task') {
        bpmnShape.activity.task.type = task;
      }
    }
    if (args.item.iconCss.indexOf('e-gate') > -1) {
      var gate = args.item.id.replace('Gateway', '');
      if (bpmnShape.shape === 'Gateway') {
        bpmnShape.gateway.type = gate;
      }
    }
    diagram.dataBind();
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

diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '800px',
  nodes: nodes,
  connectors: connectors,
  //contextMenuSettings: contextMenu,
  //contextMenuOpen: contextMenuOpen,
  //contextMenuClick: contextMenuClick,
  snapSettings: { constraints: ej.diagrams.SnapConstraints.ShowLines },
  //dragEnter: dragEnter,
  collectionChange: collectionChange,
});
diagram.appendTo('#diagram');
diagram.fitToPage();

var palette = new ej.diagrams.SymbolPalette({
  expandMode: 'Multiple',
  symbolMargin: { left: 15, right: 15, top: 15, bottom: 15 },
  symbolHeight: 60,
  symbolWidth: 60,
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

let firstAdded = false;

function collectionChange(args) {
  const { element, state, type } = args;
  if (element instanceof ej.diagrams.Node) {
    const nodeType = element.shape.type;
    if (
      state === 'Changed' &&
      type === 'Addition' &&
      nodeType === 'SwimLane' &&
      !firstAdded
    ) {
      firstAdded = true;
      const saveData = JSON.parse(diagram.saveDiagram());
      const nodes = saveData.nodes;
      const clonedNodesToAdd = nodes
        .filter((e) => e?.shape?.type !== 'SwimLane')
        .map((e) => ej.diagrams.cloneObject(e));
      const swimLaneNode = ej.diagrams.cloneObject(
        nodes.find((e) => e?.shape?.type === 'SwimLane')
      );

      diagram.clear();

      //recalculatePositions({ swimLaneNode, clonedNodesToAdd, connectors });

      diagram.add(swimLaneNode);
      for (let i = 0; i < clonedNodesToAdd.length; i++) {
        let node = {
          id: clonedNodesToAdd[i].id,
          width: clonedNodesToAdd[i].width,
          height: clonedNodesToAdd[i].height,
          shape: clonedNodesToAdd[i].shape,
          annotations: clonedNodesToAdd[i].annotations,
          //margin: { left: marginLeft, top: 20 },
          offsetX: clonedNodesToAdd[i].offsetX,
          offsetY: clonedNodesToAdd[i].offsetY,
        };
        diagram.addNodeToLane(
          node,
          swimLaneNode.id,
          swimLaneNode.shape.lanes[0].id
        );
      }
      diagram.connectors = connectors;
    }
  }
}

function recalculatePositions({ swimLaneNode, clonedNodesToAdd, connectors }) {
  let minOffsetX = Number.MAX_SAFE_INTEGER;
  let minOffsetY = Number.MAX_SAFE_INTEGER;
  let maxOffsetX = Number.MIN_SAFE_INTEGER;
  let maxOffsetY = Number.MIN_SAFE_INTEGER;
  let plusWidth, plusHeigth;
  for (let index = 0; index < clonedNodesToAdd.length; index++) {
    const node = clonedNodesToAdd[index];
    if (minOffsetX > node.offsetX) {
      minOffsetX = node.offsetX;
    }
    if (maxOffsetX < node.offsetX) {
      maxOffsetX = node.offsetX;
      plusWidth = node.width / 2;
    }
    if (minOffsetY > node.offsetY) {
      minOffsetY = node.offsetY;
    }
    if (maxOffsetY < node.offsetY) {
      maxOffsetY = node.offsetY;
      plusHeigth = node.height / 2;
    }
    node.zIndex += swimLaneNode.zIndex;
    node.offsetX += 50;
    node.offsetY += 50;
  }
  const swimLaneNodeOffsetX = minOffsetX - 100;
  const swimLaneNodeOffsetY = minOffsetY - 100;

  swimLaneNode.width = maxOffsetX - minOffsetX + plusWidth + 100;
  swimLaneNode.height = maxOffsetY - minOffsetY + plusHeigth + 100;
  swimLaneNode.offsetX = 50;
  swimLaneNode.offsetY = 50;
  swimLaneNode.pivot = { x: 0, y: 0 };

  // connectors.forEach(function (connector) {
  //   connector.zIndex += swimLaneNode.zIndex;
  //   for (let key in connector) {
  //     if (
  //       [
  //         'name',
  //         'lineDashArray',
  //         'segments',
  //         'sourcePoint',
  //         'targetPoint',
  //         'lineColor',
  //         'lineWidth',
  //         'constraints',
  //         'opacity',
  //         'parent',
  //         'lineHitPadding',
  //         'targetNode',
  //         'targetPort',
  //         'sourceNode',
  //         'sourcePort',
  //         'horizontalAlign',
  //         'verticalAlign',
  //         'cornerRadius',
  //         'bridgeSpace',
  //         'sourcePadding',
  //         'targetPadding',
  //         'type',
  //         'cssClass',
  //         'defaultType',
  //         'targetID',
  //         'sourceID',
  //       ].includes(key)
  //     )
  //       continue;
  //     if (['targetDecorator', 'sourceDecorator'].includes(key)) {
  //       for (let keyProp in connector[key]) {
  //         if (
  //           [
  //             'borderColor',
  //             'borderWidth',
  //             'fillColor',
  //             'height',
  //             'pathData',
  //             'shape',
  //             'width',
  //           ].includes(keyProp)
  //         )
  //           continue;
  //         delete connector[key][keyProp];
  //       }
  //     } else if ('segments' === key) {
  //       connector[key].forEach(function (segment) {
  //         for (let keyProp in segment) {
  //           if (!keyProp.startsWith('_')) continue;
  //           delete segment[keyProp];
  //         }
  //       });
  //     } else if ('labels' === key) {
  //       connector[key].forEach(function (label) {
  //         for (let keyProp in label) {
  //           if (
  //             [
  //               'bold',
  //               'fontColor',
  //               'fontFamily',
  //               'fontSize',
  //               'textAlign',
  //               'horizontalAlignment',
  //               'text',
  //               'italic',
  //               'name',
  //               'margin',
  //             ].includes(keyProp)
  //           )
  //             continue;
  //           delete label[keyProp];
  //         }
  //       });
  //     } else {
  //       delete connector[key];
  //     }
  //   }
  // });
}

function cleanConnector(connector) {
  for (let key in connector) {
    if (
      [
        'name',
        'lineDashArray',
        'segments',
        'sourcePoint',
        'targetPoint',
        'lineColor',
        'lineWidth',
        'constraints',
        'opacity',
        'parent',
        'lineHitPadding',
        'targetNode',
        'targetPort',
        'sourceNode',
        'sourcePort',
        'horizontalAlign',
        'verticalAlign',
        'cornerRadius',
        'bridgeSpace',
        'sourcePadding',
        'targetPadding',
        'type',
        'cssClass',
        'defaultType',
        'targetID',
        'sourceID',
      ].includes(key)
    )
      continue;
    if (['targetDecorator', 'sourceDecorator'].includes(key)) {
      for (let keyProp in connector[key]) {
        if (
          [
            'borderColor',
            'borderWidth',
            'fillColor',
            'height',
            'pathData',
            'shape',
            'width',
          ].includes(keyProp)
        )
          continue;
        delete connector[key][keyProp];
      }
    } else if ('segments' === key) {
      connector[key].forEach(function (segment) {
        for (let keyProp in segment) {
          if (!keyProp.startsWith('_')) continue;
          delete segment[keyProp];
        }
      });
    } else if ('labels' === key) {
      connector[key].forEach(function (label) {
        for (let keyProp in label) {
          if (
            [
              'bold',
              'fontColor',
              'fontFamily',
              'fontSize',
              'textAlign',
              'horizontalAlignment',
              'text',
              'italic',
              'name',
              'margin',
            ].includes(keyProp)
          )
            continue;
          delete label[keyProp];
        }
      });
    } else {
      delete connector[key];
    }
  }
}
