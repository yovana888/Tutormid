import React from 'react'
import { NewCard, ContainerIcon, Card, Title } from './Style'

export default function CardStep({ title, text, color, icon }) {
    return (
        <NewCard>
            <ContainerIcon className={color}>
                {icon}
            </ContainerIcon>
            <Card>
                <Title>
                    {title}
                </Title>
                {text}
            </Card>
        </NewCard>

    )
}