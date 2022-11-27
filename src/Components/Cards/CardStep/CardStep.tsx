import React from 'react'
import { NewCard, ContainerIcon, Card, Title } from './Style'

interface Props {
    title: string
    text: string;
    color: 'purple' | 'green' | 'blue' | 'yellow';
    icon: JSX.Element;
}

export default function CardStep({ title, text, color, icon }: Props) {
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