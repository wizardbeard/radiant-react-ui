import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Book, Package, Palette, Code } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Design System</Badge>
            <h1 className="text-5xl font-bold mb-4 text-foreground">
              React Component Library
            </h1>
            <p className="text-xl text-muted-foreground">
              A modern design system built with React, Tailwind CSS, and Storybook
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader>
                <Book className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Storybook Ready</CardTitle>
                <CardDescription>
                  Interactive component documentation and testing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Run Storybook to explore all components:
                </p>
                <code className="block p-3 bg-muted rounded text-sm">
                  npm run storybook
                </code>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Package className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Component Library</CardTitle>
                <CardDescription>
                  Pre-built components ready to use
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Includes Button, Card, Input, Badge, Checkbox, Switch, and more. All components follow consistent design patterns.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Palette className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Design Tokens</CardTitle>
                <CardDescription>
                  Semantic color system with HSL values
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  All colors use semantic tokens defined in index.css. Easy to customize and maintain consistent theming.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Code className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>TypeScript</CardTitle>
                <CardDescription>
                  Fully typed components with great DX
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Built with TypeScript for excellent autocomplete and type safety throughout your project.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Quick Start</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2 text-foreground">1. Add Storybook Scripts</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Add these scripts to your package.json:
                </p>
                <code className="block p-3 bg-muted rounded text-sm">
                  "storybook": "storybook dev -p 6006",<br />
                  "build-storybook": "storybook build"
                </code>
              </div>

              <div>
                <h3 className="font-medium mb-2 text-foreground">2. Start Storybook</h3>
                <code className="block p-3 bg-muted rounded text-sm">
                  npm run storybook
                </code>
              </div>

              <div>
                <h3 className="font-medium mb-2 text-foreground">3. Use Components</h3>
                <code className="block p-3 bg-muted rounded text-sm font-mono">
                  {`import { Button } from "@/components/ui/button";\n\n<Button variant="default">Click me</Button>`}
                </code>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <a href="/components">View Components</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://docs.lovable.dev/" target="_blank" rel="noopener noreferrer">
                Read Documentation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
