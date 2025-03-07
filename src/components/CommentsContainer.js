import React from 'react'
import CommentsList from './CommentsList'

const commentsData = [
    {
        name: "MithunPrasad",
        reply: "Looking forward to the roadmap. Also anything like roadmap for MLS?",
        replies: [
            {
                name: "MithunPrasad",
                reply: "Looking forward to the roadmap. Also anything like roadmap for MLS?",
                replies: [
                    {
                        name: "MithunPrasad",
                        reply: "Looking forward to the roadmap. Also anything like roadmap for MLS?",
                        replies: [
                            
                        ]
                    },
                ]
            },
            {
                name: "MithunPrasad",
                reply: "Looking forward to the roadmap. Also anything like roadmap for MLS?",
                replies: [
                    {
                        name: "MithunPrasad",
                        reply: "Looking forward to the roadmap. Also anything like roadmap for MLS?",
                        replies: [
                            
                        ]
                    },
                    {
                        name: "MithunPrasad",
                        reply: "Looking forward to the roadmap. Also anything like roadmap for MLS?",
                        replies: [
                            
                        ]
                    },
                ]
            },
            {
                name: "MithunPrasad",
                reply: "Looking forward to the roadmap. Also anything like roadmap for MLS?",
                replies: [
                    
                ]
            },

        ]
    },
    {
        name: "MithunPrasad",
        reply: "Looking forward to the roadmap. Also anything like roadmap for MLS?",
        replies: [
            {
                name: "MithunPrasad",
                reply: "Looking forward to the roadmap. Also anything like roadmap for MLS?",
                replies: [
                    {
                        name: "MithunPrasad",
                        reply: "Looking forward to the roadmap. Also anything like roadmap for MLS?",
                        replies: [
                            {
                                name: "MithunPrasad",
                                reply: "Looking forward to the roadmap. Also anything like roadmap for MLS?",
                                replies: [
                                    {
                                        name: "MithunPrasad",
                                        reply: "Looking forward to the roadmap. Also anything like roadmap for MLS?",
                                        replies: [
                                            {
                                                name: "MithunPrasad",
                                                reply: "Looking forward to the roadmap. Also anything like roadmap for MLS?",
                                                replies: [
                                                    {
                                                        name: "MithunPrasad",
                                                        reply: "Looking forward to the roadmap. Also anything like roadmap for MLS?",
                                                        replies: [
                                                            {
                                                                name: "MithunPrasad",
                                                                reply: "Looking forward to the roadmap. Also anything like roadmap for MLS?",
                                                                replies: [
                                                                   
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                            
                                        ]
                                    }
                                ]
                            }
                            
                        ]
                    }
                    
                ]
            }
        ]
    },
    {
        name: "MithunPrasad",
        reply: "Looking forward to the roadmap. Also anything like roadmap for MLS?",
        replies: [
            {
                name: "MithunPrasad",
                reply: "Looking forward to the roadmap. Also anything like roadmap for MLS?",
                replies: [
                    
                ]
            }
        ]
    },
    {
        name: "MithunPrasad",
        reply: "Looking forward to the roadmap. Also anything like roadmap for MLS?",
        replies: [
            
        ]
    },
    {
        name: "MithunPrasad",
        reply: "Looking forward to the roadmap. Also anything like roadmap for MLS?",
        replies: [
            
        ]
    },
    {
        name: "MithunPrasad",
        reply: "Looking forward to the roadmap. Also anything like roadmap for MLS?",
        replies: [
            
        ]
    },
    {
        name: "MithunPrasad",
        reply: "Looking forward to the roadmap. Also anything like roadmap for MLS?",
        replies: [
            
        ]
    },
    {
        name: "MithunPrasad",
        reply: "Looking forward to the roadmap. Also anything like roadmap for MLS?",
        replies: [
            
        ]
    },
    {
        name: "MithunPrasad",
        reply: "Looking forward to the roadmap. Also anything like roadmap for MLS?",
        replies: [
            
        ]
    }
]

const CommentsContainer = () => {
  return (
    <div className='ma-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments: </h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer