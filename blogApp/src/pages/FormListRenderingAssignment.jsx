import { useState } from "react";
const FormListRenderingAssignment = () => {
  // Q1. Student List — 10 Marks Create a React application that displays a list of students. **Requirements:** -
  // Create a list of at least 5 students. - Display student names using `.map()`. - Show each student's name and
  // email. - Display the list in a clean layout. - Use a unique `key` for each rendered item.

  // const students = [
  //   {
  //     id: 1,
  //     name: "Harmanpreet Singh",
  //     email: "harmanpreet@gmail.com",
  //     age: 21,
  //     gender: "Male",
  //   },
  //   {
  //     id: 2,
  //     name: "Khushman",
  //     email: "khushman@gmail.com",
  //     age: 20,
  //     gender: "Female",
  //   },
  //   {
  //     id: 3,
  //     name: "Ravneet Sidhu",
  //     email: "ravneet@gmail.com",
  //     age: 21,
  //     gender: "Male",
  //   },
  //   {
  //     id: 4,
  //     name: "Kush",
  //     email: "kush@gmail.com",
  //     age: 24,
  //     gender: "Male",
  //   },
  //   {
  //     id: 5,
  //     name: "Karamjot Singh",
  //     email: "karamjot@gmail.com",
  //     age: 21,
  //     gender: "Male",
  //   },
  //   {
  //     id: 6,
  //     name: "Baljinder",
  //     email: "baljinder@gmail.com",
  //     age: 23,
  //     gender: "Male",
  //   }
  // ];

  // Q2. To-Do List Application — 10 Marks Create a simple To-Do List application. **Requirements:** -
  // Add a text input to enter a task. - Add an Add Task button. - Display all tasks using `.map()`. -
  // Add a Delete button for each task. - Update the list dynamically when a task is added or deleted. -
  // Do not add empty tasks.

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  //  Q3. Student Registration Form — 10 Marks Create a student registration form. **Requirements:** - Full Name
  // - Email - Password - Confirm Password - Submit button **Validation:** - All fields are required. - Email
  // must have a valid format. - Password must contain at least 6 characters. - Password and Confirm Password
  // must match. - Display appropriate error messages for invalid inputs. - Display a success message after
  // valid submission.

  // const [name,setName]=useState("");
  // const [email,setEmail]=useState("");
  // const [password,setPassword]=useState("");
  // const [confirmPassword,setConfirmPassword]=useState("");
  // const [error,setError]=useState("");
  // const [success,setSuccess]=useState("");

  // const handleSubmit=(e)=>{
  //   e.preventDefault();
  //   if(!name || !email || !password || !confirmPassword){
  //     setError("All fields are required");
  //     return;
  //   }
  //   const emailRegex="@gmail.com";
  //   if(!emailRegex){
  //     setError("Invalid email format");
  //     return;
  //   }
  //   if(password.length<6){
  //     setError("Password must be at least 6 characters");
  //     return;
  //   }
  //   if(password!==confirmPassword){
  //     setError("Passwords do not match");
  //     return;
  //   }
  //   setError("");
  //   setSuccess("Registration successful!");
  // }

  // Q4. Contact Form with Validation — 10 Marks Create a contact form with the following fields: - Name -
  // Email - Phone Number - Subject - Message - Submit button **Validation:** - All fields are required. -
  // Email must be in a valid format. - Phone number must contain 10 digits. - Message must contain at least
  // 10 characters. - Show error messages when validation fails. - Display a success message when the form is
  // submitted correctly.

  const subjects = ["General Inquiry", "Support", "Feedback", "Other"];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonbenNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sucess, setSucess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phonenumber || !message || !subject) {
      setError("All fields are required");
      return;
    }

    if (!email.includes("@gmail") || !email.includes(".com")) {
      setError("Invalid Email Format");
      return;
    }
    if (phonenumber.length < 10) {
      setError("Phone number must contain 10 digits");
      return;
    }
    if (message.length < 10) {
      setError("Message must be at least 10 characters");
      return;
    }
    setError("");
    setSucess("Form Submit SuccessFully");
    return;
  };

  // Q5. Product List with Search — 10 Marks Create a product listing application with a search feature.
  //  **Requirements:** - Create a list of at least 8 products. - Each product should have a name and price.
  // - Display products using `.map()`. - Add a search input to filter products by name. - Update the displayed
  //  list as the user types. - Display a "No products found" message when there are no matching results.

  const products = [
    { id: 1,
       name: "Apple",
        price: 100000 
      },
    { id: 2, 
      name: "Samsung", 
      price: 20000 
    },
    { id: 3, name: "Google Pixel", price: 30000 },
    { id: 4, name: "Microsoft Surface", price: 40000 },
    { id: 5, name: "Oppo", price: 50000 },
    { id: 6, name: "Vivo", price: 60000 },
    { id: 7, name: "Mi", price: 70000 },
    { id: 8, name: "HUAWEI", price: 80000 },
  ];

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      {/* {students.map((user) => (
        <div
          style={{
            width: 400,
            height: 200,
            backgroundColor: "red",
            borderRadius: 10,
            textAlign:"center",
          }}
          key={user.id}
        >
            <h1 style={{color:"white"}}>{user.name}</h1>
            <h1 style={{color:"white"}}>{user.email}</h1>
        </div>
      ))} */}

      {/* <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
        </div>
        {error && <p style={{color:"red"}}>{error}</p>}
        {success && <p style={{color:"green"}}>{success}</p>}
        <button type="submit">Submit</button>
      </form>  */}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={phonenumber}
          placeholder="Phone Number"
          onChange={(e) => setPhonbenNumber(e.target.value)}
        />
        <select value={subject} onChange={(e) => setSubject(e.target.value)}>
          <option value="">Select Subject</option>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={message}
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}
        {sucess && <p style={{ color: "green" }}>{sucess}</p>}

        <button type="submit">Submit</button>
      </form>

      <input
        type="text"
        placeholder="Search Products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product.id}>
            <h3>Product:{product.name}</h3>
            <p>Price:{product.price}</p>
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}

      <div>
        <input
          type="text"
          value={task}
          placeholder="Enter a task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
        <ul>
          {tasks.map((t, index) => (
            <li key={index}>
              {t}{" "}
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FormListRenderingAssignment;
