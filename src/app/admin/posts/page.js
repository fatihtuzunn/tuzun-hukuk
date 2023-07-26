
"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Editor } from "@tinymce/tinymce-react";


const Dashboard = () => {

    //NEW WAY TO FETCH DATA
    const fetcher = (...args) => fetch(...args).then((res) => res.json());

    const { data, mutate, error, isLoading } = useSWR(
        `/api/posts`,
        fetcher
    );

    const handleDelete = async (id) => {
        try {
            await fetch(`/api/posts/${id}`, {
                method: "DELETE",
            });
            mutate();
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div><div className={styles.posts}>
            {isLoading
                ? "loading"
                : data?.map((post) => (
                    <div className={styles.post} key={post._id}>
                        <div className={styles.imgContainer}>
                            <Image src={post.img} alt="" width={200} height={100} />
                        </div>
                        <h2 className={styles.postTitle}>{post.title}</h2>
                        <span
                            className={styles.delete}
                            onClick={() => handleDelete(post._id)}
                        >
                            X
                        </span>
                    </div>
                ))}
        </div></div>
    )
}

export default Dashboard;