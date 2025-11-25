import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ComponentSection = ({ title, description, children }: { title: string; description: string; children: React.ReactNode }) => (
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-2 text-foreground">{title}</h2>
    <p className="text-muted-foreground mb-6">{description}</p>
    <div className="space-y-6">
      {children}
    </div>
  </div>
);

const ExampleBlock = ({ title, code, children }: { title: string; code?: string; children: React.ReactNode }) => (
  <div className="border rounded-lg p-6 bg-card">
    <h3 className="text-lg font-semibold mb-4 text-foreground">{title}</h3>
    <div className="flex flex-wrap gap-4 items-center mb-4">
      {children}
    </div>
    {code && (
      <div className="mt-4 pt-4 border-t">
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
          <code className="text-foreground">{code}</code>
        </pre>
      </div>
    )}
  </div>
);

const Components = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" size="sm" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl font-bold mb-2 text-foreground">Component Library</h1>
            <p className="text-xl text-muted-foreground">
              Explore all available components with live examples
            </p>
          </div>

          <ComponentSection
            title="Buttons"
            description="Primary actions and interactive elements"
          >
            <ExampleBlock 
              title="Variants"
              code={`<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
            >
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </ExampleBlock>

            <ExampleBlock 
              title="Sizes"
              code={`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>`}
            >
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </ExampleBlock>

            <ExampleBlock 
              title="States"
              code={`<Button>Active</Button>
<Button disabled>Disabled</Button>`}
            >
              <Button>Active</Button>
              <Button disabled>Disabled</Button>
            </ExampleBlock>
          </ComponentSection>

          <ComponentSection
            title="Cards"
            description="Containers for content and actions"
          >
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card description goes here</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">This is the card content area.</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Simple Card</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">A card without description or footer.</p>
                  </CardContent>
                </Card>
              </div>
              <div className="border-t pt-4">
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                  <code className="text-foreground">{`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`}</code>
                </pre>
              </div>
            </div>
          </ComponentSection>

          <ComponentSection
            title="Inputs"
            description="Form inputs for user data"
          >
            <ExampleBlock 
              title="Input Types"
              code={`<div className="space-y-2">
  <Label htmlFor="text">Text Input</Label>
  <Input id="text" placeholder="Enter text..." />
</div>
<div className="space-y-2">
  <Label htmlFor="email">Email Input</Label>
  <Input id="email" type="email" placeholder="email@example.com" />
</div>
<div className="space-y-2">
  <Label htmlFor="password">Password Input</Label>
  <Input id="password" type="password" />
</div>`}
            >
              <div className="w-full max-w-sm space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="text-input">Text Input</Label>
                  <Input id="text-input" placeholder="Enter text..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-input">Email Input</Label>
                  <Input id="email-input" type="email" placeholder="email@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-input">Password Input</Label>
                  <Input id="password-input" type="password" placeholder="Enter password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="disabled-input">Disabled Input</Label>
                  <Input id="disabled-input" placeholder="Disabled" disabled />
                </div>
              </div>
            </ExampleBlock>
          </ComponentSection>

          <ComponentSection
            title="Badges"
            description="Status indicators and labels"
          >
            <ExampleBlock 
              title="Variants"
              code={`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`}
            >
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </ExampleBlock>
          </ComponentSection>

          <ComponentSection
            title="Checkboxes & Switches"
            description="Boolean input controls"
          >
            <ExampleBlock 
              title="Checkboxes"
              code={`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms</Label>
</div>
<div className="flex items-center space-x-2">
  <Checkbox id="newsletter" defaultChecked />
  <Label htmlFor="newsletter">Subscribe</Label>
</div>`}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="checkbox-1" />
                  <Label htmlFor="checkbox-1" className="cursor-pointer">
                    Accept terms and conditions
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="checkbox-2" defaultChecked />
                  <Label htmlFor="checkbox-2" className="cursor-pointer">
                    Subscribe to newsletter
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="checkbox-3" disabled />
                  <Label htmlFor="checkbox-3" className="cursor-pointer opacity-50">
                    Disabled option
                  </Label>
                </div>
              </div>
            </ExampleBlock>

            <ExampleBlock 
              title="Switches"
              code={`<div className="flex items-center space-x-2">
  <Switch id="notifications" />
  <Label htmlFor="notifications">Enable notifications</Label>
</div>
<div className="flex items-center space-x-2">
  <Switch id="autosave" defaultChecked />
  <Label htmlFor="autosave">Auto-save</Label>
</div>`}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch id="switch-1" />
                  <Label htmlFor="switch-1" className="cursor-pointer">
                    Enable notifications
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="switch-2" defaultChecked />
                  <Label htmlFor="switch-2" className="cursor-pointer">
                    Auto-save enabled
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="switch-3" disabled />
                  <Label htmlFor="switch-3" className="cursor-pointer opacity-50">
                    Disabled switch
                  </Label>
                </div>
              </div>
            </ExampleBlock>
          </ComponentSection>

          <ComponentSection
            title="Tabs"
            description="Organize content into tabbed sections"
          >
            <div className="space-y-6">
              <Tabs defaultValue="tab1" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="tab1">Overview</TabsTrigger>
                  <TabsTrigger value="tab2">Details</TabsTrigger>
                  <TabsTrigger value="tab3">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Overview</CardTitle>
                      <CardDescription>General information and statistics</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        This is the overview tab content. Use tabs to organize related content.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="tab2" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Details</CardTitle>
                      <CardDescription>Detailed information</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        This is the details tab content with more specific information.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="tab3" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Settings</CardTitle>
                      <CardDescription>Configuration options</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        This is the settings tab where configuration options would go.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
              <div className="border-t pt-4">
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                  <code className="text-foreground">{`<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Overview</TabsTrigger>
    <TabsTrigger value="tab2">Details</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    <Card>
      <CardHeader>
        <CardTitle>Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Content for tab 1</p>
      </CardContent>
    </Card>
  </TabsContent>
  <TabsContent value="tab2">
    <Card>
      <CardHeader>
        <CardTitle>Details</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Content for tab 2</p>
      </CardContent>
    </Card>
  </TabsContent>
</Tabs>`}</code>
                </pre>
              </div>
            </div>
          </ComponentSection>

          <ComponentSection
            title="Grainy Textures"
            description="Synthwave-style grainy texture overlays"
          >
            <ExampleBlock 
              title="Grainy Buttons"
              code={`<Button className="grain">Default Grain</Button>
<Button variant="secondary" className="grain">Secondary Grain</Button>
<Button variant="destructive" className="grain-subtle">Subtle Grain</Button>`}
            >
              <Button className="grain">Default Grain</Button>
              <Button variant="secondary" className="grain">Secondary Grain</Button>
              <Button variant="destructive" className="grain-subtle">Subtle Grain</Button>
              <Button variant="outline" className="grain-subtle">Outline Subtle</Button>
            </ExampleBlock>

            <ExampleBlock 
              title="Grainy Cards"
              code={`<Card className="grain">
  <CardHeader>
    <CardTitle>Grainy Card</CardTitle>
    <CardDescription>With texture overlay</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Content with grain effect</p>
  </CardContent>
</Card>`}
            >
              <div className="grid md:grid-cols-2 gap-4 w-full">
                <Card className="grain">
                  <CardHeader>
                    <CardTitle>Full Grain</CardTitle>
                    <CardDescription>Prominent texture overlay</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">This card has the .grain class applied for a more prominent texture effect.</p>
                  </CardContent>
                </Card>

                <Card className="grain-subtle">
                  <CardHeader>
                    <CardTitle>Subtle Grain</CardTitle>
                    <CardDescription>Lighter texture overlay</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">This card uses .grain-subtle for a more refined texture.</p>
                  </CardContent>
                </Card>
              </div>
            </ExampleBlock>

            <ExampleBlock 
              title="Grainy Badges & Panels"
              code={`<Badge className="grain">Grainy Badge</Badge>
<div className="grain p-4 bg-card rounded-lg">
  Grainy panel content
</div>`}
            >
              <div className="space-y-4 w-full">
                <div className="flex gap-2 flex-wrap">
                  <Badge className="grain">Default Grain</Badge>
                  <Badge variant="secondary" className="grain">Secondary Grain</Badge>
                  <Badge variant="destructive" className="grain-subtle">Destructive Subtle</Badge>
                  <Badge variant="outline" className="grain-subtle">Outline Subtle</Badge>
                </div>
                <div className="grain p-6 bg-card rounded-lg border">
                  <h4 className="font-semibold mb-2">Grainy Panel</h4>
                  <p className="text-sm text-muted-foreground">
                    Apply grain classes to any container to add synthwave-style texture effects.
                  </p>
                </div>
                <div className="grain-subtle p-6 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Subtle Grain Panel</h4>
                  <p className="text-sm text-muted-foreground">
                    Use grain-subtle for a more refined, understated texture.
                  </p>
                </div>
              </div>
            </ExampleBlock>
          </ComponentSection>

          <div className="mt-12 p-6 bg-muted/50 rounded-lg text-center grain-subtle">
            <h3 className="text-lg font-semibold mb-2 text-foreground">Want to see more?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Run Storybook for interactive documentation and all component variations
            </p>
            <code className="inline-block px-4 py-2 bg-background rounded text-sm">
              npm run storybook
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Components;
