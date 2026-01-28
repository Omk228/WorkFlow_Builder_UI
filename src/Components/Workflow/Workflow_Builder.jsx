import React, { useState } from 'react';
import { initialWorkflow } from '../../utils/mockData';
import {
  addNodeToTree,
  deleteNodeFromTree,
  editNodeLabel
} from '../../utils/treeHelpers';

import { NODE_TYPES } from '../../utils/constants';
import Node from './Node.jsx';
import './Workflow_Builder.css';

const WorkflowBuilder = () => {
  const [workflow, setWorkflow] = useState(initialWorkflow);

  // handleAddNode updated with branchType for {yes, no} logic
  const handleAddNode = (parentId, type, branchType = null) => {
    const newNode = {
      id: Date.now().toString(),
      type: type,
      label: `New ${type.charAt(0).toUpperCase() + type.slice(1)}`,
      ...(type === NODE_TYPES.BRANCH ? { yes: null, no: null } : { child: null })
    };

    setWorkflow((prev) => addNodeToTree(prev, parentId, newNode, branchType));
  };

  const handleDeleteNode = (id) => {
    if (id === 'root') return;
    setWorkflow((prev) => deleteNodeFromTree(prev, id));
  };

  const handleEditLabel = (id, newLabel) => {
    setWorkflow((prev) => editNodeLabel(prev, id, newLabel));
  };

  const handleSave = () => {
    console.log("Workflow JSON Structure:", JSON.stringify(workflow, null, 2));
  };

  return (
    <div className="workflow-container">
      <header className="workflow-header">
        <h1>Workflow Builder</h1>
        <button className="save-button" onClick={handleSave}>
          Save (Log to Console)
        </button>
      </header>
      <main className="canvas">
        <Node
          data={workflow}
          onAdd={handleAddNode}
          onDelete={handleDeleteNode}
          onEdit={handleEditLabel}
        />
      </main>
    </div>
  );
};

export default WorkflowBuilder;
