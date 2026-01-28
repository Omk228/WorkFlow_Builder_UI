  // src/utils/mockData.js

export const initialWorkflow = {
  id: "root",
  type: "start",
  label: "Start Workflow",
  // Start behaves like an Action node - exactly one child 
  child: {
    id: "node_1",
    type: "action",
    label: "Send Welcome Email",
    child: {
      id: "node_2",
      type: "branch",
      label: "User Clicked?",
      // Branch node with named branches instead of array 
      yes: {
        id: "node_3",
        type: "action",
        label: "Tag Interested",
        child: {
          id: "node_5",
          type: "end",
          label: "Finish Success"
          // End node has no child property at all 
        }
      },
      no: {
        id: "node_4",
        type: "action",
        label: "Wait 2 Days",
        child: {
          id: "node_6",
          type: "end",
          label: "Finish Exit"
        }
      }
    }
  }
};