'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from './lib/utils'

const TilesComponent: React.FC<{ className?: string; rows?: number; cols?: number }> = ({
  className,
  rows: r,
  cols: c
}) => {
  const rows = new Array(r || 100).fill(1)
  const cols = new Array(c || 10).fill(1)

  return (
    <div className={cn('absolute inset-0 w-full h-full flex', className)}>
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className={`flex-1 border-l border-neutral-800/50 relative`}
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `rgba(34, 197, 94, 0.1)`,
                boxShadow: `
                  0 0 20px rgba(34, 197, 94, 0.3),
                  inset 0 0 20px rgba(34, 197, 94, 0.1)
                `,
                borderColor: `rgba(34, 197, 94, 0.5)`,
                transition: { duration: 0.2 }
              }}
              animate={{
                transition: { duration: 0.8 }
              }}
              key={`col` + j}
              className="w-full aspect-square border-r border-t border-neutral-800/50 relative hover:border-green-500/50 transition-all duration-300"
              style={{
                minHeight: `${100 / (c || 10)}vh`
              }}
            />
          ))}
        </motion.div>
      ))}
      {/* Background glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/5 via-transparent to-blue-900/5 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1)_0%,transparent_50%)] pointer-events-none" />
    </div>
  )
}

export const Tiles = React.memo(TilesComponent)
