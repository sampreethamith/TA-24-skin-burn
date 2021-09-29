import React from 'react'
import FeatureCard from './MiniCompos/FeatureCard'
import './Data/HoverPanel.css'
import { Container } from 'react-bootstrap'

const HoverPanel = () => {
    return (
        <Container>
            <div className="hover-panel">
                <FeatureCard className="feature-card" />
                <FeatureCard className="feature-card" />
            </div>
        </Container>
    )
}

export default HoverPanel
