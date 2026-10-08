function ToastContainer({ toasts }) {
  if (toasts.length === 0) return null;

  const icons = {
    success: '✅',
    danger: '🗑️',
    warning: '📦',
    info: 'ℹ️',
  };

  return (
    <div className="toast-container" role="alert" aria-live="polite">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast ${toast.type}`}>
          <span aria-hidden="true">{icons[toast.type] || '💬'}</span>
          {toast.message}
        </div>
      ))}
    </div>
  );
}

export default ToastContainer;
