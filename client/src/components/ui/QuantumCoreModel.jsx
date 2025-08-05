import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

const QuantumCore = () => {
  const { scene } = useGLTF('/models/Quantum_Core_0702125650_texture.glb')
  return <primitive object={scene} scale={1.5} />
}

const QuantumCoreModel = () => {
  return (
    <Canvas style={{ height: '600px', width: '100%' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} intensity={1} />
      <Suspense fallback={null}>
        <QuantumCore />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default QuantumCoreModel
