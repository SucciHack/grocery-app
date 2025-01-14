import React from 'react'

export default function loading() {
  return (
    <div>
      <div className="loader relative w-10 h-10 transform rotate-[165deg]">
            <div className="loader-before absolute top-1/2 left-1/2 block w-2 h-2 rounded-sm transform -translate-x-1/2 -translate-y-1/2 animate-before8">
            </div>
            <div className="loader-after absolute top-1/2 left-1/2 block w-2 h-2 rounded-sm transform -translate-x-1/2 -translate-y-1/2 animate-after6">
        </div>
        </div>
    </div>
  )
}
