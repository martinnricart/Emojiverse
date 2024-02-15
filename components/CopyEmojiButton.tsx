import React from 'react';

interface CopyEmojiButtonProps {
  emoji: string;
}

const CopyEmojiButton: React.FC<CopyEmojiButtonProps> = ({ emoji }) => {
  const copyEmoji = () => {
    navigator.clipboard.writeText(emoji);
    alert('Emoji copied!');
  };

  return (
    <button onClick={copyEmoji}>
      {emoji} Copy
    </button>
  );
};

export default CopyEmojiButton;