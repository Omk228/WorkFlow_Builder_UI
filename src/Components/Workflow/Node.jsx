import React from 'react';
import { NODE_TYPES } from '../../utils/constants';
import './Node.css';

const Node = ({ data, onAdd, onDelete, onEdit }) => {
  return (
    <div className="node-wrapper">
      <div className={`node-card ${data.type}`}>
        <input 
          className="node-label-input"
          value={data.label}
          onChange={(e) => onEdit(data.id, e.target.value)}
        />
        
        <div className="node-actions">
          {data.type !== NODE_TYPES.END && (
            <div className="add-options">
              {/* If node is NOT a branch, add to the single child path [cite: 36, 37] */}
              {data.type !== NODE_TYPES.BRANCH ? (
                <>
                  <button onClick={() => onAdd(data.id, NODE_TYPES.ACTION)}>+ Action</button>
                  <button onClick={() => onAdd(data.id, NODE_TYPES.BRANCH)}>+ Branch</button>
                  <button onClick={() => onAdd(data.id, NODE_TYPES.END)}>+ End</button>
                </>
              ) : (
                /* If node IS a branch, offer choices for each path  */
                <div className="branch-controls">
                  <div className="branch-add-group">
                    <span>Yes:</span>
                    <button onClick={() => onAdd(data.id, NODE_TYPES.ACTION, 'yes')}>+ Act</button>
                    <button onClick={() => onAdd(data.id, NODE_TYPES.BRANCH, 'yes')}>+ Br</button>
                  </div>
                  <div className="branch-add-group">
                    <span>No:</span>
                    <button onClick={() => onAdd(data.id, NODE_TYPES.ACTION, 'no')}>+ Act</button>
                    <button onClick={() => onAdd(data.id, NODE_TYPES.BRANCH, 'no')}>+ Br</button>
                  </div>
                </div>
              )}
            </div>
          )}
          {data.id !== 'root' && (
            <button className="delete-btn" onClick={() => onDelete(data.id)}>Delete</button>
          )}
        </div>
      </div>

      {/* Render single child for Action/Start nodes [cite: 24, 25] */}
      {data.child && (
        <div className="node-children">
          <div className="child-branch-wrapper">
            <Node data={data.child} onAdd={onAdd} onDelete={onDelete} onEdit={onEdit} />
          </div>
        </div>
      )}

      {/* Render named branches for Branch nodes [cite: 30] */}
      {data.type === NODE_TYPES.BRANCH && (data.yes || data.no) && (
        <div className="node-children">
          {data.yes && (
            <div className="child-branch-wrapper branch-yes">
              <span className="branch-label">Yes</span>
              <Node data={data.yes} onAdd={onAdd} onDelete={onDelete} onEdit={onEdit} />
            </div>
          )}
          {data.no && (
            <div className="child-branch-wrapper branch-no">
              <span className="branch-label">No</span>
              <Node data={data.no} onAdd={onAdd} onDelete={onDelete} onEdit={onEdit} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Node;