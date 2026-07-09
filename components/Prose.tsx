// components/Prose.tsx

export const Prose: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="max-w-none prose dark:prose-invert">
      {children}
    </div>
  );
};