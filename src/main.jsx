import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React Error Boundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 40, fontFamily: 'sans-serif', color: '#991b1b', backgroundColor: '#fef2f2', minHeight: '100vh' }}>
          <h1 style={{ fontSize: 24, fontWeight: 'bold' }}>Application Error</h1>
          <p style={{ marginTop: 10 }}>{this.state.error?.toString()}</p>
          <pre style={{ marginTop: 10, padding: 10, backgroundColor: '#fee2e2', borderRadius: 6, overflowX: 'auto' }}>
            {this.state.error?.stack}
          </pre>
          <button 
            onClick={() => window.location.href = '/'}
            style={{ marginTop: 20, padding: '10px 20px', backgroundColor: '#dc2626', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 'bold' }}
          >
            Reload Home Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
