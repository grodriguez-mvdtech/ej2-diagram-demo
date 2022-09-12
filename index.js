ej.diagrams.Diagram.Inject(
  ej.diagrams.BpmnDiagrams,
  ej.diagrams.UndoRedo,
  ej.diagrams.DiagramContextMenu
);
ej.diagrams.SymbolPalette.Inject(ej.diagrams.BpmnDiagrams);

const bpmnShapes = [
  {
    annotations: [
      {
        content: 'Event',
        margin: { top: 15 },
        offset: { x: 0.5, y: 1 },
      },
    ],
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
    annotations: [
      {
        content: 'Default task',
      },
    ],
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
    annotations: [
      {
        content: 'Default process',
      },
    ],
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
    annotations: [
      {
        content: 'Gateway',
        margin: { top: 15 },
        offset: { x: 0.5, y: 1 },
      },
    ],
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
    annotations: [
      {
        content: 'Data object',
        margin: { top: 15 },
        offset: { x: 0.5, y: 1 },
      },
    ],
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
    width: 30,
  },
  {
    annotations: [
      {
        content: 'Subprocess',
        margin: { bottom: 15 },
        offset: { x: 0.5, y: 1 },
      },
    ],
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
    annotations: [
      {
        content: 'Data source',
        margin: { top: 15 },
        offset: { x: 0.5, y: 1 },
      },
    ],
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
    annotations: [
      {
        content: 'Message',
        margin: { top: 15 },
        offset: { x: 0.5, y: 1 },
      },
    ],
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
    addInfo: { tooltip: 'Horizontal swimlane' },
    id: 'HorizontalSwimLane',
    height: 60,
    shape: {
      isLane: true,
      lanes: [
        {
          header: {
            height: 50,
            style: {
              fontSize: 11,
              strokeColor: '#757575',
            },
            width: 50,
          },
          height: 460,
          id: 'HorizontalLane1',
          style: { strokeColor: '#757575' },
          width: 660,
        },
      ],
      type: 'SwimLane',
      orientation: 'Horizontal',
    },
    width: 140,
  },
  {
    addInfo: { tooltip: 'Vertical swimlane' },
    height: 140,
    id: 'VerticalSwimLane',
    shape: {
      isLane: true,
      lanes: [
        {
          header: {
            height: 50,
            style: {
              fontSize: 11,
              strokeColor: '#757575',
            },
            width: 50,
          },
          height: 460,
          id: 'VerticalLane1',
          style: { strokeColor: '#757575' },
          width: 660,
        },
      ],
      type: 'SwimLane',
      orientation: 'Vertical',
    },
    width: 60,
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
      items: [
        { text: 'Event', iconCss: 'MVD', id: 'Add_Event' },
        { text: 'Task', iconCss: 'MVD', id: 'Add_Activity_Task' },
        { text: 'Transaction', iconCss: 'MVD', id: 'Add_Activity_SubProcess' },
        { text: 'Gateway', iconCss: 'MVD', id: 'Add_Gateway' },
        { text: 'DataObject', iconCss: 'MVD', id: 'Add_DataObject' },
        { text: 'DataSource', iconCss: 'MVD', id: 'Add_DataSource' },
        { text: 'Message', iconCss: 'MVD', id: 'Add_Message' },
        { text: 'Annotation', iconCss: 'MVD', id: 'Add_Annotation' },
      ],
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

const palette = new ej.diagrams.SymbolPalette({
  expandMode: 'Multiple',
  symbolMargin: { left: 10, right: 10, top: 10, bottom: 10 },
  symbolHeight: 50,
  symbolWidth: 50,
  palettes: [
    {
      id: 'Bpmn',
      expanded: true,
      symbols: bpmnShapes,
      title: 'BPMN Shapes',
    },
    {
      id: 'Connector',
      expanded: true,
      symbols: connectorSymbols,
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
  height: '100%',
});

let nodes = [];
let connectors = [];

let diagram = new ej.diagrams.Diagram({
  connectors,
  contextMenuSettings: contextMenu,
  height: '800px',
  nodes,
  snapSettings: {
    constraints: ej.diagrams.SnapConstraints.ShowLines,
  },
  width: '100%',
  contextMenuOpen: contextMenuOpen,
  contextMenuClick: contextMenuClick,
});
window.diagram = diagram;

diagram.appendTo('#diagramBPMN');
diagram.fitToPage({ mode: 'Width' });
palette.appendTo('#symbolpalette');

function contextMenuClick(args) {
  try {
    if (
      args.item.parentObj.target === undefined &&
      (diagram.selectedItems.nodes.length ||
        diagram.selectedItems.connectors.length)
    ) {
      const itemId = args.item.id;
      const node = diagram.selectedItems.nodes[0];
      const connector = diagram.selectedItems.connectors[0];
      if (node) {
        let bpmnShape = node.shape;
        if (itemId.startsWith('Add_')) {
          handleOnClickContextMenuAdd({ itemId, node });
        } else if (itemId === 'Delete') {
          diagram.remove(node);
        } else {
          if (args.item.iconCss.indexOf('e-adhocs') > -1) {
            bpmnShape.activity.subProcess.adhoc =
              itemId === 'AdhocNone' ? false : true;
          }
          if (args.item.iconCss.indexOf('e-event') > -1) {
            bpmnShape.event.event = itemId;
          }
          if (args.item.iconCss.indexOf('e-trigger') > -1) {
            bpmnShape.event.trigger = args.item.text;
          }
          if (args.item.iconCss.indexOf('e-loop') > -1) {
            let loop = itemId === 'LoopNone' ? 'None' : itemId;
            if (bpmnShape.activity.activity === 'Task') {
              bpmnShape.activity.task.loop = loop;
            }
            if (bpmnShape.activity.activity === 'SubProcess') {
              bpmnShape.activity.subProcess.loop = loop;
            }
          }
          if (args.item.iconCss.indexOf('e-compensation') > -1) {
            let compensation = itemId === 'CompensationNone' ? false : true;
            if (bpmnShape.activity.activity === 'Task') {
              bpmnShape.activity.task.compensation = compensation;
            }
            if (bpmnShape.activity.activity === 'SubProcess') {
              bpmnShape.activity.subProcess.compensation = compensation;
            }
          }
          if (args.item.iconCss.indexOf('e-call') > -1) {
            let compensations = itemId === 'CallNone' ? false : true;
            if (bpmnShape.activity.activity === 'Task') {
              bpmnShape.activity.task.call = compensations;
            }
          }
          if (
            itemId === 'CollapsedSubProcess' ||
            itemId === 'ExpandedSubProcess'
          ) {
            if (itemId === 'ExpandedSubProcess') {
              bpmnShape.activity.activity = 'SubProcess';
              bpmnShape.activity.subProcess.collapsed = false;
            } else {
              bpmnShape.activity.activity = 'SubProcess';
              bpmnShape.activity.subProcess.collapsed = true;
            }
          }
          if (args.item.iconCss.indexOf('e-boundry') > -1) {
            let call = itemId;
            if (itemId !== 'Default') {
              call = itemId === 'BoundryEvent' ? 'Event' : 'Call';
            }
            bpmnShape.activity.subProcess.boundary = call;
          }
          if (args.item.iconCss.indexOf('e-data') > -1) {
            let data = itemId === 'DataObjectNone' ? 'None' : itemId;
            bpmnShape.dataObject.type = data;
          }
          if (args.item.iconCss.indexOf('e-collection') > -1) {
            let collection = itemId === 'Collectioncollection';
            bpmnShape.dataObject.collection = collection;
          }
          if (args.item.iconCss.indexOf('e-task') > -1) {
            let task = task === 'TaskNone' ? 'None' : itemId;
            if (bpmnShape.activity.activity === 'Task') {
              bpmnShape.activity.task.type = task;
            }
          }
          if (args.item.iconCss.indexOf('e-gate') > -1) {
            let gate = itemId.replace('Gateway', '');
            if (bpmnShape.shape === 'Gateway') {
              bpmnShape.gateway.type = gate;
            }
          }
          diagram.dataBind();
        }
      } else {
        console.log('contextMenuClick ', args);
      }
    }
  } catch (error) {
    console.error(error);
  }
}

function contextMenuOpen(args) {
  let hiddenId = [];
  if (args.element.className !== 'e-menu-parent e-ul ') {
    hiddenId = [
      //'Add',
      'Activity-Type',
      'Adhoc',
      'Boundry',
      'Collection',
      'DataObject',
      'DeftCall',
      'EventType',
      'GateWay',
      'Loop',
      'TaskCompensation',
      'TaskType',
      'TriggerResult',
      //'Delete',
    ]; //same order than contextMenu.items array
  }
  if (
    diagram.selectedItems.nodes.length ||
    diagram.selectedItems.connectors.length
  ) {
    const node = diagram.selectedItems.nodes[0];
    const connector = diagram.selectedItems.connectors[0];
    if (node.isLane || node.isPhase) {
      hiddenId = [
        'Add',
        'Activity-Type',
        'Adhoc',
        'Association',
        'Boundry',
        'Collection',
        'DataObject',
        'DeftCall',
        'EventType',
        'Flow',
        'GateWay',
        'Loop',
        'TaskCompensation',
        'TaskType',
        'TriggerResult',
        'Delete',
      ];
    } else if (node) {
      for (let i = 0; i < args.items.length; i++) {
        let item = args.items[i];
        let bpmnShape = diagram.selectedItems.nodes[0].shape;
        if (!['DataObject', 'Gateway'].includes(bpmnShape.shape)) {
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
        if (item.text === 'Call') {
          if (
            bpmnShape.shape === 'Activity' &&
            bpmnShape.activity.activity === 'Task'
          ) {
            hiddenId.splice(hiddenId.indexOf(item.id), 1);
          }
        }
        if (item.text === 'Collection') {
          if (bpmnShape.shape === 'DataObject') {
            hiddenId.splice(hiddenId.indexOf(item.id), 1);
          }
        }
        if (item.text === 'Data Object') {
          if (bpmnShape.shape === 'DataObject') {
            hiddenId.splice(hiddenId.indexOf(item.id), 1);
          }
        }
        if (item.text === 'Event Type') {
          if (bpmnShape.shape === 'Event') {
            hiddenId.splice(hiddenId.indexOf(item.id), 1);
          }
        }
        if (item.text === 'GateWay') {
          if (bpmnShape.shape === 'Gateway') {
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
        if (item.text === 'Trigger Result') {
          if (bpmnShape.shape === 'Event') {
            hiddenId.splice(hiddenId.indexOf(item.id), 1);
          }
        }
        if (
          diagram.selectedItems.nodes.length > 0 &&
          args.parentItem &&
          args.parentItem.id === 'TriggerResult' &&
          bpmnShape.shape === 'Event'
        ) {
          let shape = bpmnShape;
          if (
            item.text !== 'None' &&
            (item.text === shape.event.event ||
              item.text === shape.event.trigger)
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
  }

  args.hiddenItems = hiddenId;
}

function handleOnClickContextMenuAdd({ itemId, node }) {
  const [, shape, activity] = itemId.split('_');
  const diagram = ej.base.getComponent('diagramBPMN', 'diagram');
  const nodeTemplate = bpmnShapes.find(
    (e) =>
      e.shape.shape === shape &&
      (!activity || e.shape.activity.activity === activity)
  );
  if (nodeTemplate) {
    connectNewNode({ node, nodeTemplate });
  } else {
    connectNewAnnotation({ node });
  }
  diagram.dataBind();
  diagram.refresh();
}

function connectNewNode({ node, nodeTemplate }) {
  const nodeToAdd = { ...nodeTemplate };
  delete nodeToAdd.id;
  let { offsetX, offsetY, segmentLength } = getNodeOffsetsRelativeTo({ node });
  nodeToAdd.offsetX = offsetX;
  nodeToAdd.offsetY = offsetY;
  const nodeAdded = diagram.add(nodeToAdd);
  const targetID = nodeAdded.id;
  const connectorToAdd = {
    sourceID: node.id,
    targetID,
    type: 'Orthogonal',
    shape: {
      type: 'Bpmn',
      flow: 'Association',
      association: 'Default',
    },
  };
  if (segmentLength) {
    connectorToAdd.segments = [
      {
        type: 'Orthogonal',
        direction: 'Bottom',
        length: segmentLength,
      },
    ];
  }
  diagram.add(connectorToAdd);
  //diagram.dataBind();
}

function connectNewAnnotation({ node }) {
  const diagram = ej.base.getComponent('diagramBPMN', 'diagram');
  if (!node.shape.annotations) node.shape.annotations = [];
  const annotationQuantity =
    node.shape.annotations.filter((e) => e.angle === 320).length ?? null;
  const annotationLength = annotationQuantity
    ? 100 * (annotationQuantity + 1)
    : 100;
  const annotation = {
    angle: 316,
    length: annotationLength,
    nodeId: node.id,
    text: 'Annotation',
  };
  node.shape.annotations.push(annotation);
  //diagram.refresh();
}

function getNodeOffsetsRelativeTo({ node }) {
  const diagram = ej.base.getComponent('diagramBPMN', 'diagram');
  const connectorsStartedInNode = diagram.connectors.filter(
    (e) => e.sourceID === node.id
  );
  let offsetX = node.offsetX + 250;
  let offsetY = node.offsetY;
  let segmentLength = null;
  if (connectorsStartedInNode.length) {
    const targetNodesIds = connectorsStartedInNode.map((e) => e.targetID);
    const targetNodesSameOffsetX = diagram.nodes.filter(
      (e) => targetNodesIds.includes(e.id) && e.offsetX === offsetX
    );
    offsetY = targetNodesSameOffsetX.length
      ? node.offsetY + 100 * targetNodesSameOffsetX.length
      : node.offsetY;
    segmentLength = 100 * targetNodesSameOffsetX.length;
  }
  return { offsetX, offsetY, segmentLength };
}
