import React, { useState } from 'react'
import ProfileInfo from '../Cards/ProfileInfo'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
// notes : implement the list state up practice , which refers to making the state in a parent component then passing it to the child component for better maintainability , try to find a common ancestor component if multiple components need access to the same state , this is another design pattern different than context API
const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("")

  const navigate = useNavigate()
  // returns a function that take the path to navigate to as a parameter
  // used to redirect to login page
  const onLogout = () => {
    navigate("/login")

  }


  const handleSearch = () => {

  }

  const onClearSearch = () => {
    setSearchQuery("")
    
  }

  // context api solves the problem of having to define state in a parent (lift state up practice)
  
  return (
    <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow'>
        
        <h2 className='text-xl font-medium text-black py-2'>همّة - Himma</h2>
        <SearchBar value={searchQuery} onChange={(e)=>{setSearchQuery(e.target.value)}} handleSearch={handleSearch} onClearSearch={onClearSearch}/>
        <ProfileInfo onLogout={onLogout}/>
    </div>
  )
}

export default Navbar
/**
 * The practice of "lifting state up" in React is a common design pattern that helps manage shared state between components.
 * 
 * 
 * 
 * 
 * Deciding whether to manage state in a parent component (like `Navbar`) and pass it down as props to a child component (like `SearchBar`) or to define state directly within the child component depends on several factors, including **data flow, reusability, and overall application architecture**. Here's a breakdown of the considerations:

### 1. **Data Flow and State Management**
- **Parent Component State**: 
  - **Centralized Control**: Managing state in a parent component allows for a single source of truth. If `searchQuery` is needed elsewhere in the `Navbar` or any sibling components, having it in the parent makes it easier to share and manage.
  - **Easier to Control Behavior**: You can easily handle behaviors related to the search query from the parent, such as triggering searches or validations based on the current state.
  
- **Child Component State**: 
  - **Encapsulation**: Keeping state within `SearchBar` may be simpler if the search functionality is entirely self-contained. It prevents the parent from needing to know about or manage the internal workings of the `SearchBar`.
  - **Less Overhead**: If `searchQuery` is only relevant within `SearchBar`, keeping the state local reduces complexity in the parent.

### 2. **Reusability**
- **Reusable Components**: If `SearchBar` is designed to be a reusable component (used in multiple places with different functionalities), it’s often beneficial to keep its state internal. This allows you to use it independently without depending on external state management.
- **Custom Behavior**: If the `SearchBar` needs to perform actions or respond to events based on the current state (like showing suggestions or handling searches), keeping the state local might simplify its implementation.

### 3. **Performance Considerations**
- **Re-renders**: If you manage the state in the parent and pass it down as props, changing the state will cause a re-render of the `Navbar` component and its children. In contrast, local state changes in `SearchBar` will only re-render that component, which could improve performance in certain scenarios.

### 4. **Better Practices**
- **Lift State Up**: A common React practice is to "lift state up" when multiple components need to share the same state. If other components besides `SearchBar` require access to `searchQuery`, managing it in the `Navbar` is a good approach.
- **Controlled vs. Uncontrolled Components**: Using props to manage state makes `SearchBar` a controlled component. This means the parent dictates its value and behavior, which can help maintain consistency across your application.

### Summary
- **Choice of Where to Manage State**: The decision is not just personal preference; it should be based on your application's architecture and how components interact with each other. 
- **Context**: If the `searchQuery` is specific to the `SearchBar`, then keeping the state in `SearchBar` is perfectly valid. If other components need to respond to or use the `searchQuery`, managing it in `Navbar` makes sense.
- **Maintainability and Readability**: Ultimately, aim for a balance between maintainability and readability in your code. Choose the approach that makes the most sense for your specific use case and future extensibility of your application.
 */