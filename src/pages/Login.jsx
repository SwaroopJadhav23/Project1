import { useState } from "react";

function Login({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple validation
        if (email === "admin@gmail.com" && password === "123456" 
            ? onLogin()
            : setError("Invalid email or password"));
    };

    return (
        <div style={{maxWidth:400,margin:"auto",padding:20}}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            {error && <p style={{color:"red"}}>{error}</p>}
        </div>
    );
}

export default Login;