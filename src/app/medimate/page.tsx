"use client";

import ColorBlock from "@/assets/ColorBlock";
import Chip from "@/assets/Chip";
import Test from "@/assets/images/concerto_demo2.png";
import Image from "next/image";
import styles from "@/app/app.module.css";
import FadeInElement from "@/assets/FadeInElement";
import Link from "next/link";

export default function Page() {
    return (
        <div
            style={{
                padding: 32,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                fontFamily: "WorkSans-Regular",
                color: "#fff",
            }}
        >
            <div className={styles.row}>
                <FadeInElement width={"50%"}>
                    <div className={styles.project_description_tile}>
                        <div>
                            medimate
                            <div className={styles.chips}>
                                {[
                                    "Python",
                                    "Raspberry Pi",
                                    "OpenCV",
                                    "System Design",
                                ].map((text, index) => {
                                    return <Chip key={index}>{text}</Chip>;
                                })}
                            </div>
                        </div>
                        <div style={{ fontSize: 24, marginTop: 16 }}>
                            Medimate is a system that enables safer, more
                            independent prescription medication management for
                            elderly and visually impaired populations. I worked
                            in a team of 5 for my robotics capstone project to
                            create several subsystems. When combined these
                            subsystems created a device that would minimize
                            medication related hospitalizations and allow for
                            our target population to operate more independently.
                        </div>
                        <Link href="/">
                            <div className={styles.link}>Visit website</div>
                        </Link>
                    </div>
                </FadeInElement>
                <FadeInElement width={"25%"}>
                    <div className={styles.background_tile}>
                        Research
                        <div
                            className={styles.list}
                            style={{
                                listStylePosition: "inside",
                            }}
                        >
                            {[
                                "285 million visually impaired people worldwide",
                                "54% of adults 50+ take 4 or more prescription medications",
                                "Many adults aged 50+ visit upwards of 5 different doctors annually",
                                "Correlations shown between visual impairment/old age and medication mismanagement",
                                "Medication mismanagement can be forgetting to take medication on time, problems reading dosages, or troubles differentiating medications",
                                "This ultimately can lead to overdosing, underdosing, addiction, and hospitalization",
                            ].map((fact, i) => {
                                return (
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                        }}
                                    >
                                        <li
                                            key={i}
                                            style={{
                                                float: "left",
                                            }}
                                        ></li>
                                        <div>{fact}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </FadeInElement>
                <FadeInElement width={"25%"}>
                    <div className={styles.background_tile}>
                        System Design
                        <div className={styles.list}>
                            {[
                                {
                                    name: "Computer Vision",
                                    description:
                                        "Reads the pill label and uses CV algorithms to unwrap the label, stitch together adjacent images, and parse the text from the final image.",
                                },
                                {
                                    name: "Scheduling",
                                    description:
                                        "Internally stores the information given in the pill label to determine proper dosage and dispensing periods/frequency.",
                                },
                                {
                                    name: "Organizational",
                                    description:
                                        "Physically separates the individual medications into different containers within the machine, allowing for easy dispensing later.",
                                },
                                {
                                    name: "Dispensing",
                                    description:
                                        "Accesses the internal containers to dispense the proper dosage of a given medication following that medicine's specific schedule.",
                                },
                            ].map((subsystem, i) => {
                                return (
                                    <div key={i}>
                                        <b>{subsystem.name}: </b>
                                        {subsystem.description}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </FadeInElement>
            </div>

            <div className={styles.row}>
                <FadeInElement width={"100%"}>
                    <div className={styles.project_demo_image}>
                        <Image
                            src={Test}
                            alt="test"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>
                </FadeInElement>
            </div>
            <div className={styles.row}>
                <FadeInElement width={"50%"}>
                    <div className={styles.project_highlight_image}>
                        <Image
                            src={Test}
                            alt="test"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>
                </FadeInElement>
                <FadeInElement width={"50%"}>
                    <div className={styles.project_highlight_image}>
                        <Image
                            src={Test}
                            alt="test"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>
                </FadeInElement>
            </div>
        </div>
    );
}
