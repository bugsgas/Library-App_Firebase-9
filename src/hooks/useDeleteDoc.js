import { useState } from 'react';
import { db } from '../firebase/config';
import { deleteDoc, doc } from 'firebase/firestore';

// Custom hook to delete a document from Firestore
export const useDeleteDoc = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const deleteDocument = async (collection, id) => {
    setError(null);
    setLoading(true);
    
   try {
      setLoading(true);
      const ref = doc(db, collection, id);
      await deleteDoc(ref);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { deleteDocument, loading, error };
};

