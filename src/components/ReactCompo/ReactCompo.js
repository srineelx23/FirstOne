import React from 'react'
import "../Angular/Angular.css"
function ReactCompo() {
  return (
    <div>
    <div className="card mt-5 p-4 bg-warning">
        <h3 className='text-start'>React</h3>
        <div className="card-body text-start rounded-3">
            <p className="lead">React is a flexible and efficient JavaScript library developed by Meta (formerly Facebook) for building user interfaces. It focuses on creating fast, interactive UIs using a component-based architecture, where each part of the UI is broken down into reusable, self-contained components. React embraces a unidirectional data flow, which makes it easier to manage and debug state across large applications. One of its standout features is the Virtual DOM, which optimizes rendering and boosts performance by updating only the parts of the UI that change. React doesn’t dictate how the rest of your app should work, giving developers the freedom to integrate their own tools and libraries.</p>
        </div>
    </div>
</div>
  )
}

export default ReactCompo
