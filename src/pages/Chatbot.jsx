

import React, { useState } from "react";
import { marked } from "marked";
import { Bot, Send, Sparkles, Brain, Rocket } from "lucide-react";

const Chatbot = () => {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");

    const isAskingAboutName = (input) => {
        const nameQuestions = ["what is your name", "who are you", "your name"];
        return nameQuestions.some(question => input.toLowerCase().includes(question));
    };

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim()) {
            setResponse("Please enter your Query!");
            return;
        }
        if (isAskingAboutName(input)) {
            setResponse(marked.parse("My name is **Alex**. How can I assist you today?"));
            return;
        }
        setResponse("Loading...");
        try {
            const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": "Bearer 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",
                    "HTTP-Referer": "<YOUR_SITE_URL>",
                    "X-Title": "<YOUR_SITE_NAME>",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "model": "deepseek/deepseek-r1:free",
                    "messages": [{ role: "user", content: input }],
                }),
            });
            const data = await res.json();
            const markdownText = data.choices?.[0]?.message?.content || "No response received.";
            setResponse(marked.parse(markdownText));
        } catch (error) {
            setResponse(`Error: ${error.message}`);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#1742D2]/10 to-gray-50">
            <div className="bg-gradient-to-r from-[#1742D2] to-[#2160FF] text-white py-12 px-4 mb-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Your AI Mentor</h1>
                    <p className="text-xl text-blue-100">Empowering Your Journey with Intelligent Conversations</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 pb-12">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                    <div className="bg-[#1742D2]/5 p-6 border-b border-[#1742D2]/10">
                        <div className="flex items-center gap-3">
                            <div className="bg-[#1742D2] p-3 rounded-xl">
                                <Bot className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">AI Assistant</h2>
                                <p className="text-sm text-gray-600">Always here to help</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6">
                        <div className="bg-gray-50 rounded-2xl p-4 mb-6 h-[300px] overflow-y-auto">
                            <div className="flex items-start gap-3 mb-4">
                                <div className="bg-[#1742D2] p-2 rounded-lg">
                                    <Bot className="w-5 h-5 text-white" />
                                </div>
                                <div className="bg-[#1742D2]/5 rounded-2xl p-4 max-w-[80%]" dangerouslySetInnerHTML={{ __html: response }}></div>
                            </div>
                        </div>

                        <form onSubmit={sendMessage} className="relative">
                            <textarea
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type your message here..."
                                className="w-full px-6 py-4 pr-[130px] rounded-2xl border-2 border-gray-100 focus:border-[#1742D2] focus:ring-4 focus:ring-[#1742D2]/10 focus:outline-none resize-none h-[120px] text-gray-700"
                            />
                            <button
                                type="submit"
                                className="absolute bottom-4 right-4 bg-[#1742D2] text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-[#1742D2]/90 transition-all transform hover:scale-105 shadow-lg"
                            >
                                Ask AI
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
