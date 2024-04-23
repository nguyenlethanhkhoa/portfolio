import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CgCPlusPlus, CgCircleci } from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiJava,
    DiFsharp,
    DiDjango,
    DiSpark,
    DiDocker,
} from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import {
    SiRedis,
    SiFirebase,
    SiNextdotjs,
    SiSolidity,
    SiPostgresql,
    SiAngular,
    SiFastapi,
    SiFlask,
    SiApachecassandra,
    SiRabbitmq,
    SiApachekafka,
    SiApachemaven,
    SiApacheairflow,
    SiKubernetes,
} from "react-icons/si";

interface ISkill {
    title: string;
    icon: any;
}

interface ITechStack {
    title: string;
    skills: ISkill[]
}

const TECH_STACK: ITechStack[] = [
    {
        title: 'Languages',
        skills: [
            { title: 'Python', icon: <DiPython /> },
            { title: 'Javascript', icon: <DiJavascript1 /> },
            { title: 'C#', icon: <TbBrandCSharp /> }
        ]
    },
    {
        title: 'Frameworks',
        skills: [
            { title: 'ReactJs', icon: <DiReact /> },
            { title: 'NextJs', icon: <SiNextdotjs /> },
            { title: 'Angular', icon: <SiAngular /> },
            { title: 'Django', icon: <DiDjango /> },
            { title: 'Fast Api', icon: <SiFastapi /> },
        ]
    },
    {
        title: 'Data',
        skills: [
            { title: 'MongoDb', icon: <DiMongodb /> },
            { title: 'Firebase', icon: <SiFirebase /> },
            { title: 'Postgre', icon: <SiPostgresql /> },
            { title: 'Cassandra', icon: <SiApachecassandra /> },
            { title: 'RabbitMQ', icon: <SiRabbitmq /> },
            { title: 'Kafka', icon: <SiApachekafka /> },
            { title: 'Redis', icon: <SiRedis /> },
            { title: 'Spark', icon: <DiSpark /> },
            { title: 'Airflow', icon: <SiApacheairflow /> },
        ]
    },
    {
        title: 'CI/CD',
        skills: [
            { title: 'CircleCI', icon: <CgCircleci /> },
            { title: 'Maven', icon: <SiApachemaven /> },
            { title: 'Docker', icon: <DiDocker /> },
            { title: 'Kubernetes', icon: <SiKubernetes /> },
        ]
    },
    // {
    //     title: 'DevOps',
    //     skills: [
    //         { title: 'CircleCI', icon: <CgCircleci /> },
    //         { title: 'Maven', icon: <SiApachemaven /> },
    //         { title: 'Docker', icon: <DiDocker /> },
    //         { title: 'Kubernetes', icon: <SiKubernetes /> },
    //     ]
    // }
]

const Techstack: React.FC = () => {
    return (
        <Container>
            {TECH_STACK.map((stack) => (
                <>
                    <h1 className="project-heading" style={{ fontSize: "1.6em" }}>
                        {stack.title}
                    </h1>
                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        {stack.skills.map((skill) => (
                            <Col xs={3} md={2} className="tech-icons">
                                {skill.icon}
                                <p style={{ fontSize: '12px' }}>{skill.title}</p>
                            </Col>
                        ))}
                    </Row>
                </>
            ))}
        </Container>
    );
}

export default Techstack;
