import React, { useState } from "react"

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  }
]

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab)
  if (!allTabs || !Array.isArray(allTabs)) {
    return
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  }
}

const Use_Tabs = () => {
  const { currentItem, changeItem } = useTabs(0, content)
  return (
    <div className="App">
      <h2>Use Tabs</h2>
      {content.map((section, index) =>
        <button onClick={() => changeItem(index)}>
          {section.tab}
        </button>
      )}
      <div>
        {currentItem.content}
      </div>
    </div>
  )
}

export default Use_Tabs
