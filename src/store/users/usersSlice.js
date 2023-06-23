/* Use createSlice and define:
    - name as a string
    - initialState, which includes users as an array, isLoading as a boolean and error as undefined
    - extraReducers as an empty object
*/
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await fetch('https://randomuser.me/api/?results=10');
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw new Error(error);
  }
});

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

// Export the reducer from the slice
export default usersSlice.reducer;
