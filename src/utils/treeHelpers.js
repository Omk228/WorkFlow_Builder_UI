export const addNodeToTree = (node, parentId, newNode, branchType = null) => {
  if (node.id === parentId) {
    if (node.type === 'branch') {
      // Branch node ke liye specific path (yes/no) update karega
      return { ...node, [branchType]: newNode };
    }
    // Action ya Start node ke liye single child update karega
    return { ...node, child: newNode };
  }

  // Recursive search in child
  let updatedChild = node.child ? addNodeToTree(node.child, parentId, newNode, branchType) : null;
  // Recursive search in branch paths
  let updatedYes = node.yes ? addNodeToTree(node.yes, parentId, newNode, branchType) : null;
  let updatedNo = node.no ? addNodeToTree(node.no, parentId, newNode, branchType) : null;

  return {
    ...node,
    child: updatedChild || node.child,
    yes: updatedYes || node.yes,
    no: updatedNo || node.no,
  };
};

export const deleteNodeFromTree = (node, targetId) => {
  // Root node cannot be deleted [cite: 39]
  if (node.id === targetId) return null;

  // Agar direct child delete ho raha hai, toh grandchild ko parent se jodo 
  if (node.child && node.child.id === targetId) {
    return { ...node, child: node.child.child || null };
  }

  // Branch paths check karo
  if (node.yes && node.yes.id === targetId) {
    return { ...node, yes: node.yes.child || null };
  }
  if (node.no && node.no.id === targetId) {
    return { ...node, no: node.no.child || null };
  }

  return {
    ...node,
    child: node.child ? deleteNodeFromTree(node.child, targetId) : null,
    yes: node.yes ? deleteNodeFromTree(node.yes, targetId) : null,
    no: node.no ? deleteNodeFromTree(node.no, targetId) : null,
  };
};

export const editNodeLabel = (node, targetId, newLabel) => {
  if (node.id === targetId) {
    return { ...node, label: newLabel };
  }
  return {
    ...node,
    child: node.child ? editNodeLabel(node.child, targetId, newLabel) : null,
    yes: node.yes ? editNodeLabel(node.yes, targetId, newLabel) : null,
    no: node.no ? editNodeLabel(node.no, targetId, newLabel) : null,
  };
};